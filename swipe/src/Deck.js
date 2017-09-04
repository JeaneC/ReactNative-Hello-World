import React, { Component } from 'react';
import {
  View, Animated, PanResponder, Dimensions, LayoutAnimation, UIManager
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHHOLD = 0.50 * SCREEN_WIDTH
const SWIPE_OUT_DURATION = 250

class Deck extends Component {
  static defaultProps = {
    onSwipeRight: () => {},
    onSwipeLeft: () => {}
  }

  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      //Executed when user presses down on the screen

      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx })
        //,y: gesture.dy
      },
      //Called when user is pressing and dragging
      //This is called A LOT

      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHHOLD){
          this.forceSwipe('right')
        } else if (gesture.dx < -SWIPE_THRESHHOLD){
          this.forceSwipe('left')
        } else {
          this.resetPosition();
        }
      }
      //Called when the user is pressing, dragging, and then released

    });

    this.state = { panResponder, position, index: 0 };
  }

  //called whenever lifecycle gets a new set of props
  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({ index: 0 });
    }
  }

  componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
    LayoutAnimation.spring();
  }

  forceSwipe(direction) {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH

    Animated.timing(this.state.position, {
      toValue: { x, y: 0},
      duration: SWIPE_OUT_DURATION
    }).start(() => this.onSwipeComplete(direction));
  }

  onSwipeComplete(direction) {
    const { onSwipeLeft, onSwipeRight, data } = this.props;
    const item = data[this.state.index]

    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);

    this.state.position.setValue({ x: 0, y: 0});
    this.setState({ index: this.state.index + 1});
  }


  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0}
    }).start();
  }

  getCardStyle() {
    const { position } = this.state;

    //interpolate ties two values together to scale together
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5,0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg']
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }]
    }


  }

  renderCards() {
    if (this.state.index >= this.props.data.length){
      return this.props.renderNoMoreCards();
    }

    return this.props.data.map((item, i) => {
      //i is the index of each card as it's passed
      //this.state.index is something we keep incremeneting to track
      //how many cards the user has swiped
      if ( i < this.state.index ) { return null; }

      if (i === this.state.index) {
        return (
          <Animated.View
            key = {item.id}
            style={[this.getCardStyle(), styles.cardStyle]}
            {...this.state.panResponder.panHandlers}
          >
            {this.props.renderCard(item)}
          </Animated.View>
        )
      };

      return (
        <Animated.View
          key ={item.id}
          style={[styles.cardStyle, { top: 10 * ( i - this.state.index )}]}
        >
          {this.props.renderCard(item)}
        </Animated.View>
      )
    }).reverse();
  }

  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
    );
  }
}

const styles = {
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    marginTop: 10
  }
}

export default Deck;

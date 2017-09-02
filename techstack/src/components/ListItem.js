import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {


  //Life cycle method called before program gets rendered
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    //selectedLibraryId comes from mapStateToProps that triggered when the user touched a button
    //library.id comes from

    if (expanded){
      return (
        <CardSection>
          <Text style={styles.textStyle}>
            {library.description}
          </Text>
        </CardSection>
      );
    }


  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;


    return (

      //I have to put the comments for the bottom tag here because it returns an error
      //id = this.props.library.id
      //selectLibrary is a function from actions that takes in an id
      //and returns a type and payload
      <TouchableWithoutFeedback
          onPress={() => this.props.selectLibrary(id)}
        >


        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>

      </TouchableWithoutFeedback>
    )

  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  textStyle: {
    paddingLeft:15,
    paddingRight:15
  }
}

const mapStateToProps = (state, ownProps) => {
  //ownProps are the props that were passed to the component we were wrapping
  //So these were the props from ListItem (this folder)
  //ownProps = this.props; They are exactly the same
  const expanded = state.selectedLibraryId === ownProps.library.id;

  //SelectionReducer is called selectedLibraryId
  return { expanded }

}

export default connect(mapStateToProps, actions)(ListItem);

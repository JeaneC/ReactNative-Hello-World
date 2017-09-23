import React, { Component } from 'react';
import { CardSection } from './common';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import * as actions from '../actions';

//import * as actions
//There may be many different action creators
// * as actions will give everything exported and assigns it to actions

class ListItem extends Component {

  renderDescription() {

    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <Text>{library.description}</Text>
      );
    }
  }

  render() {
    const {titleStyle} = styles
    const { id, title } = this.props.library



    return (
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
  }
}

//ownProps is the samething as this.props
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded }

}

export default connect(mapStateToProps, actions)(ListItem)

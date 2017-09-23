import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View } from 'react-native'

class LibraryList extends Component {
  render() {
    console.log(this.props);
    return (
      <View/>
    )
  }
}

//Calls the function connect, which returns a function and then call that function
// with LibraryList


//This function takes the global state from the redux store and it will map some of it
//To the component we link
//So this basically just takes the state object and we choose what we want to pass to it
const mapStateToProps = state => {
  return { library: state.libraries }
};
//Any object returned from here will show up as props to the component LibraryList


export default connect(mapStateToProps)(LibraryList);

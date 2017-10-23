import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, ListView } from 'react-native'
import ListItem from './ListItem'
import { Button } from 'react-native-elements'
class LibraryList extends Component {
  
  //Instant the component is about to be rendered, this will be called
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem library={library} />
  }

  render() {

    return (
      <View style={{ flex: 1, marginBottom: 20}}>
        <View style = {{ flex: 9}}>
          <ListView
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
        </View>
        <Button large onPress={() => console.log('Hello')} buttonStyle={{flex: 1}} label='Hello'/>
      </View>
    )
  }
}

//Calls the function connect, which returns a function and then call that function
// with LibraryList


//This function takes the global state from the redux store and it will map some of it
//To the component we link
//So this basically just takes the state object and we choose what we want to pass to it
const mapStateToProps = state => {
  return { libraries: state.libraries }
};
//Any object returned from here will show up as props to the component LibraryList


export default connect(mapStateToProps)(LibraryList);

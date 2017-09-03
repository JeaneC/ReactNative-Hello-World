import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase'
import reducers from './src/reducers'

export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBpBh7lFL5wEs3_J5z7lOjzaBsr-sJceyc",
      authDomain: "manage-9bc5d.firebaseapp.com",
      databaseURL: "https://manage-9bc5d.firebaseio.com",
      projectId: "manage-9bc5d",
      storageBucket: "manage-9bc5d.appspot.com",
      messagingSenderId: "320899826137"
    };
    
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

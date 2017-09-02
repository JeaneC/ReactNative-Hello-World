import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';


export default class App extends React.Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyAngifKRcJ3D7xiMNFyBHav9oSaELlf130",
      authDomain: "auth-dc64f.firebaseapp.com",
      databaseURL: "https://auth-dc64f.firebaseio.com",
      projectId: "auth-dc64f",
      storageBucket: "auth-dc64f.appspot.com",
      messagingSenderId: "420750760706"
    })
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication2" />
        <LoginForm />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

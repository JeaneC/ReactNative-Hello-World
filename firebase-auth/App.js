import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import firebase from 'firebase';

export default class App extends React.Component {
  componentDidMount() {
      const config = {
      apiKey: "AIzaSyCdV-h_PkvMyCtqrutXIi4lBPA4qax-xyg",
      authDomain: "one-time-p-19960.firebaseapp.com",
      databaseURL: "https://one-time-p-19960.firebaseio.com",
      projectId: "one-time-p-19960",
      storageBucket: "one-time-p-19960.appspot.com",
      messagingSenderId: "829878843949"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <SignUpForm />
          <SignInForm />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

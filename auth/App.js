import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './src/components/common';
import LoginForm from './src/components/LoginForm';


export default class App extends React.Component {
  state = { loggedIn: null };

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyAngifKRcJ3D7xiMNFyBHav9oSaELlf130",
      authDomain: "auth-dc64f.firebaseapp.com",
      databaseURL: "https://auth-dc64f.firebaseio.com",
      projectId: "auth-dc64f",
      storageBucket: "auth-dc64f.appspot.com",
      messagingSenderId: "420750760706"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true})
      } else {
        this.setState({ loggedIn: false})
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return  (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
            Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication2" />
        {this.renderContent()}
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

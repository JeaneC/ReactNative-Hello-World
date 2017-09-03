import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import reducers from './src/reducers'
import LoginForm from './src/components/LoginForm'
import ReduxThunk from 'redux-thunk'

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));


    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

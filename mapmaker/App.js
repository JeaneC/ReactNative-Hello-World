import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import mainScreen from './screens/mainScreen'
import lineScreen from './screens/lineScreen'
import markerScreen from './screens/markerScreen'

import { TabNavigator } from 'react-navigation';

export default class App extends React.Component {

  render() {
    const MainNavigator = TabNavigator({
        line: { screen: lineScreen },
        main: { screen: mainScreen },
        marker: { screen: markerScreen },

      }, {
        lazy: true,
        header: null
      });
    return (
      <MainNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomMarkers from './examples/CustomMarkers'
import PolylineCreator from './examples/PolylineCreator'
import PathCreator from './examples/PathCreator'
import PolygonCreator from './examples/PolygonCreator'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PolylineCreator />
      </View>
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

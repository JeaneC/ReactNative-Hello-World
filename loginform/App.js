import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { FormInput } from 'react-native-elements';
import TextForm from './src/components/TextForm'

export default class App extends React.Component {
  state = {
    text: ''
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{ flex: 3 }}
        />
        <TextForm
          label='USERNAME'
          textColor='white'
          formTextColor='white'
        />
        <TextForm
          label='PASSWORD'
          textColor='white'
          formTextColor='white'
          borderColor='black'
        />
        <View
          style={{ flex: 3 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form : {
    flex: 1
  },
  textStyle: {
    height: 30,
    width: 250,
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1
  }
});

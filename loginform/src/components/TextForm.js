import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class TextForm extends Component {
  state = {
    text: ''
  }


  render() {
    return (
      <View style={styles.form}>
        <View style={{ flex: 1 }}/>
        <View style={{ flex: 3}}>
          <Text style={[{
            color: this.props.textColor ? this.props.textColor : 'black'
          },styles.label]}
          >{this.props.label}</Text>
          <TextInput
            style={[{
              color: this.props.formTextColor ? this.props.formTextColor : 'black',
              borderBottomColor: this.props.borderColor ? this.props.borderColor : 'black'
            },styles.textStyle]}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>
        <View style={{ flex: 1 }}/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  form : {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    backgroundColor: 'red'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  textStyle: {
    height: 30,
    width: 275,
    borderBottomWidth: 2
  }
})

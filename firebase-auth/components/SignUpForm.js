import React, {Component} from 'react';
import { View, Text, Keyboard } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL  = 'https://us-central1-one-time-p-19960.cloudfunctions.net'

class SignUpForm extends Component {
  state = { phone: '' };

  handleSubmit = async () => {
    Keyboard.dismiss();
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
    } catch (err) {
      console.log(err);
    }
  }

  // This is the wordier version of above
  // handleSubmit = () => {
  //   axios.post(`${ROOT_URL}/createUser`, {
  //     phone: this.state.phone
  //   })
  //     .then(() => {
  //       axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone })
  //     })
  // }

  render() {
    return (
      <View>
          <View style={{ marginBottom: 10}}>
            <FormLabel>Enter Phone Number</FormLabel>
            <FormInput
              value={this.state.phone}
              onChangeText={phone => this.setState({ phone })}
            />
            <Button onPress={this.handleSubmit} title="Submit" />
          </View>
      </View>
    )
  }
}

export default SignUpForm;

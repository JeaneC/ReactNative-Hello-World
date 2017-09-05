import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage} from 'react-native';
import { AppLoading } from 'expo'
import Slides from '../components/Slides'

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#03A9F4' },
  { text: 'Set your location, then swipe away', color: '#009688' },
  { text: 'Use this to get a job', color: '#03A9F4'}
]

class WelcomeScreen extends Component {
  state = { token: null }

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.setState({ token });
      this.props.navigation.navigate('map')

    } else {
      this.setState({ token: false});
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth')
  }

  render() {

    //null and false trigger equally, lodash only looks for null
    if (_.isNull(this.state.token)){
      return <AppLoading />;
    }

    //the token is false, so we do get the welcome screen
    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
    );
  }
}

export default WelcomeScreen;

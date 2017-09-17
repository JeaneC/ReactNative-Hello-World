import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView, Location, Constants, Permissions } from 'expo';
import { Button, Icon } from 'react-native-elements';

const API_KEY = 'AIzaSyCIrbtT3T0epacU3xxA_P1cq9Nqi9iOAzc'
let id = 1;
let loaded = false;

class lineScreen extends Component {
  static navigationOptions = {
    title: 'Line',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='navigation' size={30} />
    },
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.

  };

  constructor() {
    super();

    this.state = {
      mapLoaded: false,
      nextStop: 1,
      region: {
        latitude: 40.72004412623778,
        longitude: -73.8111714306203,
        longitudeDelta: 0.015,
        latitudeDelta: 0.015,
      },
      markers: [
        {
          coordinate: {
            latitude: 40.702832,
            longitude: -73.756821,
          },
          id: 'main'
        },
      ],

    };

    this.onMapPress = this.onMapPress.bind(this);

  }
  onMapPress(e) {
    // Commment to prevent marker creating
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          id: `${id++}`,
        },
      ],
    });
  }

  printMarkers() {
    console.log('The Markers Are');
    console.log(this.state.markers);
  }

  clearMarkers = () => {
    let markers = [
      {
        coordinate: {
          latitude: 40.72004412623778,
          longitude: -73.8111714306203,
        },
        id: 'main'
      },
    ]

    this.setState({ markers });

  }

  onRegionChangeComplete = (region) => {
  this.setState({ region });
}

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          region={this.state.region}
          onPress={this.onMapPress}
          zoomEnabled={false}
          pitchEnabled={false}
          onRegionChangeComplete={this.onRegionChangeComplete}
        >
        {this.state.markers.map((marker, index) => {
          return (
            <MapView.Marker
              draggable
              pinColor="blue"
              coordinate={marker.coordinate}
              key={marker.id}
            >

            </MapView.Marker>
          );
        })}
        </MapView>
        <View style={styles.buttonContainer}>
          <Button
            small
            title="Clear"
            backgroundColor="red"
            onPress={this.clearMarkers}
            buttonStyle={styles.buttonStyle}
          />
          <Button
            small
            title="Draw"
            backgroundColor="#009688"
            buttonStyle={styles.buttonStyle}
          />
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'blue'
  },
  mapStyle: {
    flex: 1
  },
  buttonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 20,
    left: 0,
    right: 0
  },
  buttonStyle: {
    flex: 1,
    width: 100,
    borderRadius: 10
  }
}

export default lineScreen;

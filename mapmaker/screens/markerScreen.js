import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView, Location, Constants, Permissions } from 'expo';
import { Icon, Button } from 'react-native-elements';

let id = 1;

class markerScreen extends Component {
  static navigationOptions = {
    title: 'Marker',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='map' size={30} />
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
          zoomEnabled={true}
          pitchEnabled={false}
          onRegionChangeComplete={this.onRegionChangeComplete}
        >
        {this.state.markers.map((marker, index) => {
          return (
            <MapView.Marker
              draggable
              pinColor="blue"
              coordinate={marker.coordinate}
              onDragEnd={e => console.log(e.nativeEvent)}
              key={marker.id}
            >

            </MapView.Marker>
          );
        })}
        </MapView>
        <View style={styles.buttonContainer}>
          <Button
            large
            title="List All Coords"
            backgroundColor="#009688"
            icon={{ name: 'map' }}
            onPress={() => this.printMarkers()}
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
    bottom: 20,
    left: 0,
    right: 0
  }
}

export default markerScreen;

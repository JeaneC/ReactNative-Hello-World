import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView, Location, Constants, Permissions } from 'expo';
import { Icon, Button } from 'react-native-elements';

import CustomMarkers from '../examples/CustomMarkers'
import DefaultMarkers from '../examples/DefaultMarkers'
import PolylineCreator from '../examples/PolylineCreator'
import PolygonCreator from '../examples/PolygonCreator';
import DisplayLatLng from '../examples/DisplayLatLng'
import MyLocationMapMarker from '../examples/MyLocationMapMarker'
import LoadingMap from '../examples/LoadingMap'

class mainScreen extends Component {
  static navigationOptions = {
    title: 'Main',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='my-location' size={30} />
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
      polylines: [
         {
          coordinates: [
             {
              latitude: 40.7073617,
              longitude: -73.767391
            },
             {
              latitude: 40.707882,
              longitude: -73.765227,
            },
            {
             latitude: 40.707882,
             longitude: -73.765227
           },
            {
             latitude: 40.7073726,
             longitude: -73.76468969999999
           },
          ],
          "id": 0,
        },
      ],
    };

  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          region={this.state.region}
          zoomEnabled={false}
          pitchEnabled={false}
          />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  mapStyle: {
    flex: 1
  }
}
export default mainScreen;

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component { //Borrowing from component (has state features)
  state = { albums: [] };


  componentWillMount() { //Gets called before render
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then( response => this.setState({ albums: response.data }));
  }

  //setstate is a way of re-rendering things

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );

    //map is an array helper, the inside is  liek  af or each loop
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  };
}

export default AlbumList;

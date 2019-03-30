import React, { Component } from 'react';
import './App.css';
import Header from './components/header/navBar'
import Map from './components/leaflet/map'
import Jobs from './components/Jobb/jobs'

class App extends Component {
  state = {
    lat: '',
    lng: ''
  }

  changeState = (lat, lng) => {
    this.setState({lat, lng});
  }
  render() {

    return (
      <div>
        <Header></Header>  
        <Map changeState={this.changeState}></Map>
        <Jobs position={this.state}></Jobs>
      </div>
    );
  }
}

export default App;

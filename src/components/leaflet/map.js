import React, {
    Component
} from 'react'
import leaflet from 'leaflet'
import './map.css'
import {Container} from 'reactstrap'

class LeafletMap extends Component {
    constructor() {
        super();
        this.state = {
        }

    }


    componentDidMount() {
        this.initMap();
    }

    componentDidUpdate({
        markersData
    }) {
        // check if data has changed
        if (this.props.markersData !== markersData) {
            this.updateMarkers(this.props.markersData);
        }
    }

    initMap() {
        this.map = leaflet.map('map', {
            layers: [
                leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                    maxZoom: 20,
                    id: 'mapbox.streets',
                    accessToken: 'pk.eyJ1IjoiYmFydGVrNzA4IiwiYSI6ImNqdHBrcGRyMzA1NjQ0ZHIwbHJsNnZvcm8ifQ.RjE2NlmMcunebCNLBiPlug'
                }),
            ]
        });
        this.map.setView([40.730610,-73.935242], 3)
        //this.layer = leaflet.layerGroup().addTo(this.map);
        //this.updateMarkers(this.props.markersData);
        this.map.on("click", (e) => this.addMarker(e));

    }


    addMarker = (e) => {
        console.log(e.latlng);
        if(!this.marker){
            this.marker = leaflet.marker(e.latlng);
            this.marker.addTo(this.map);
        }
        else{
            this.marker.setLatLng(e.latlng)
        }
        
        this.props.changeState(e.latlng.lat, e.latlng.lng)
    }

    updateMarkers(markersData) {
        this.layer.clearLayers();
        markersData.forEach(marker => {
            leaflet.marker(
                marker.latLng, {
                    title: marker.title
                }
            ).addTo(this.layer);
        });
    }



    render() {
        return (
            
             <Container id="map"/ >
        );
    }
}

export default LeafletMap;
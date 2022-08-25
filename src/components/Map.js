import React, {useEffect, useRef, useState} from 'react'
import {Button, Card} from "react-bootstrap";


import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoicHAwMDYzeCIsImEiOiJjazhiNmZiMnkwNWw0M2RzMjJub2xhMXYwIn0.OssYldnMWVzFiQr0o24_iw';

function Map() {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(132.454797056);
    const [lat, setLat] = useState(34.394593542);
    const [zoom, setZoom] = useState(1);
    let [clicked, setClicked] = useState(false);
    localStorage.setItem('userGPS', "false");

    useEffect(() => {
        if (map.current) {return;} // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom,
            projection: 'globe',
        });

        // locate user
        map.current.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            style: {
                right: 10,
                top: 10
              },
        }))

        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });

        route();
        // add zoom and rotation controls
        map.current.addControl(new mapboxgl.NavigationControl());
    });

    const route = () => {
        navigator.permissions.query({
            name: 'geolocation'
          }).then(permission =>
            // is geolocation granted?
            permission.state === "granted"? localStorage.setItem('userGPS', "true") : localStorage.setItem('userGPS', "false")
        );


        if (localStorage.getItem('userGPS') === "true") {
            if (map.current.getLayer('point'))  map.current.removeLayer('point');
            if (map.current.getSource('end'))   map.current.removeSource('end');
            if (map.current.getLayer('end'))    map.current.removeLayer('end');
        }

        if (clicked===false && localStorage.getItem('userGPS')==="false" && map.current) {
            map.current.on('load', () => {
                //code
                // Add starting point to the map
                map.current.addLayer({
                    id: 'point',
                    type: 'circle',
                    source: {
                        type: 'geojson',
                        data: {
                            type: 'FeatureCollection',
                            features: [{
                                type: 'Feature',
                                properties: {},
                                geometry: {
                                    type: 'Point',
                                    coordinates: [lng, lat]
                                }
                            }]
                        }
                    },
                    paint: {
                        'circle-radius': 10,
                        'circle-color': '#3887be'
                    }
                });
            });
        }

        if(localStorage.getItem('userGPS') === "false" && map.current) {
            map.current.on('click', (event) => {
                setClicked(true);
                if (map.current.getLayer('point'))  map.current.removeLayer('point');
                const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
                const end = {
                    type: 'FeatureCollection',
                    features: [{
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'Point',
                            coordinates: coords
                        }
                    }]
                };

                // end Changes based on the click
                if (map.current.getLayer('end')) {
                    map.current.getSource('end').setData(end);
                    setLat(coords[1]);
                    setLng(coords[0]);
                }
                else {
                    map.current.addLayer({
                        id: 'end',
                        type: 'circle',
                        source: {
                            type: 'geojson',
                            data: {
                                type: 'FeatureCollection',
                                features: [{
                                    type: 'Feature',
                                    properties: {},
                                    geometry: {
                                        type: 'Point',
                                        coordinates: coords
                                    }
                                }]
                            }
                        },
                        paint: {
                            'circle-radius': 10,
                            'circle-color': '#3887be'
                        }
                    });
                }
            });
        }
    }

    const getAddress = () => {
        alert(`${lat}, ${lng}`);
    }


    return (
        <div className="home-element-padding">
            <div className="card-container">
                <div className='container-fluid' >
                    <div className="row">
                        <div className=" col-sm-12">
                            <Card className=" bg-warning.bg-gradient">
                                <Card.Header className={"bg-warning text-white text-center"}>Map</Card.Header>
                                <Card.Body>
                                    <div>
                                        <div ref={mapContainer} className="map-container" />
                                        <div className="sidebar">
                                            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                                        </div>
                                    </div>
                                    <Button className="btn btn-success btn-lg btn-block" onClick={getAddress}> Confirm Address </Button>

                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Map;
import React, {useEffect, useRef, useState} from 'react'
import {Button, Card} from "react-bootstrap";
import axios from 'axios';
import "./NearbyAuctions.css"
import {useLocation, useNavigate} from "react-router-dom";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoicHAwMDYzeCIsImEiOiJjazhiNmZiMnkwNWw0M2RzMjJub2xhMXYwIn0.OssYldnMWVzFiQr0o24_iw';

function NearbyAuctions() {
    const {state} = useLocation();
    const mapContainer = useRef(null);
    const map = useRef(null);
    let [lng, setLng] = useState();
    let [lat, setLat] = useState();
    const [zoom, setZoom] = useState(12);
    let [clicked, setClicked] = useState(false);
    const user_id = localStorage.getItem('user_id');
    const user_token = localStorage.getItem('user');
    const [auctions, setAuctions] = useState([]);

    lng = localStorage.getItem('lng');
    lat = localStorage.getItem('lat');

    const navigate = useNavigate();

    localStorage.setItem('userGPS', "false");



    useEffect(() => {
        console.log("lat: " + lat + " lng: " + lng);

        let url = "http://localhost:8080/auction_products/all"
        axios.get(url).then(res => {
            setAuctions(res.data);
        })




        if (map.current) {return;} // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom,
        });

        // locate user
        map.current.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                center: [lng, lat],
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            style: {
                right: 10,
                top: 10
            },
        }))

        new mapboxgl.Marker().setLngLat([lng, lat]).setPopup(new mapboxgl.Popup({offset: 50}).setHTML('<h6>You are here!</h6>')).addTo(map.current);

        // add the auctions on map
        for (let i = 0; i < auctions.length; i++) {
            const el = document.createElement('div');
            el.className = 'marker';
            el.style.backgroundImage = 'url("../images/mapbox-icon.png")';
            el.addEventListener('click', () => {
                window.alert(auctions[i].id);
            });
            new mapboxgl.Marker(el).setLngLat([auctions[i].lng, auctions[i].lat]).setPopup(new mapboxgl.Popup({offset: 50}).setHTML('<h6>' + auctions[i].name + '</h6>')).addTo(map.current);
            console.log(auctions[i].name);
        }


        // add zoom and rotation controls
        map.current.addControl(new mapboxgl.NavigationControl());
    },[]);



    return (
        <div className="home-element-padding">
            <div className="card-container">
                <div className='container-fluid' >
                    <div className="row">
                        <div className=" col-sm-12">
                            <Card className=" bg-warning.bg-gradient">
                                <Card.Header className={"bg-warning text-white text-center"}>Nearby Auctions</Card.Header>
                                <Card.Body>
                                    <div>
                                        <div ref={mapContainer} className="map-container" />
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NearbyAuctions;
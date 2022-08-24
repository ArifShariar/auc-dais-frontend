import React, {useEffect, useRef, useState} from 'react'
import {Card} from "react-bootstrap";


import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoicHAwMDYzeCIsImEiOiJjazhiNmZiMnkwNWw0M2RzMjJub2xhMXYwIn0.OssYldnMWVzFiQr0o24_iw';

function Map() {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    },[]);

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
export default Map;
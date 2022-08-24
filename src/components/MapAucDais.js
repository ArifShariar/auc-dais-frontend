import React, {useState} from 'react';


import {MapContainer, TileLayer} from 'react-leaflet';
//import 'leaflet/dist/leaflet.css';
import './../App.css';
import 'leaflet/dist/leaflet.css';


import {Card} from "react-bootstrap";

const position = [51.505, -0.09]

function MapAucDais() {

        return (
            <div className="home-element-padding">
                <div className="card-container">
                    <div className='container-fluid' >
                        <div className="row">
                            <div className=" col-sm-12">
                                <Card className=" bg-warning.bg-gradient">
                                    <Card.Header className={"bg-warning text-white text-center"}> My Auctions </Card.Header>
                                    <Card.Body>
                                    {/* <div id="map" style={{height: '180px'}}></div> */}

                                    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width:'100vw', height: '100vh'}}>
                                        
                                    </MapContainer> 

                                    </Card.Body>
    
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default MapAucDais;
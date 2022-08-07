import React, { Component } from 'react'
import {Card} from "react-bootstrap"; 
import './Card.css'
import axios from "axios"; 
import {Route,Router,Link, Routes} from "react-router-dom";
import { useEffect } from 'react';
import LiveAuction from './LiveAuction';

class LiveAuctions extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            live_auctions: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/liveAuctions/get/all")
            .then(response =>response.data)
            .then((data)=>{
                this.setState({live_auctions: data});
        })
    }

    
    render(){
        return (
            <div className="home-element-padding">
            <div className="card-container">
                <div className='container-fluid' >
                    <div className="row">
                        <div className=" col-sm-12">
                            <Card className=" bg-warning.bg-gradient">
                                <Card.Header className={"bg-warning text-white text-center"}> Live Auctions  </Card.Header>
                                <Card.Body>
                                     {this.state.live_auctions.length === 0 ?
                                        <h3>
                                            <p colSpan={7} className={"text-center"}>No Live Auction available</p>
                                        </h3> :
                                        this.state.live_auctions.map((auction, index) => {
                                            return (
                                                
                                                <Link to={{
                                                    pathname : "/liveAuctions/liveAuction",
                                                    state : {'auction':auction} 

                                                }}> 
                                                    <div className='card-image-container border border-warning'>
                                                        <img
                                                                src={require('../images/vase.jpeg')}
                                                                alt="product image"
                                                                height={200}
                                                                width={150}
                                                            />
                                                        <div className="image-desc-container">
                                                        <p>{auction.auctionProduct.product_name}</p>
                                                                <p>{auction.auctionProduct.max_bid}</p>
                                                                <p>{auction.auctionProduct.auction_start_date}</p>
                                                                <p>{auction.auctionProduct.auction_end_date}</p>

                                                        </div>

                                                    </div>
                                                    <LiveAuction auction={auction}/>
                                                </Link>
                                                )
                                            })
                                        } 
                                </Card.Body>
                                
                            </Card>                        
                        </div> 
                    </div> 
                </div> 
            </div></div>
        )
    }
}

export default LiveAuctions
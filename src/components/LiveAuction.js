import React, { Component } from 'react'
import {Card,Button} from "react-bootstrap";
import {useParams,useLocation} from "react-router-dom";
import './Card.css'
import axios from "axios";
import Message from './Message';

const LiveAuction = (props) => { 
        /* this.state = useLocation().state; */
        const auction = this.props.auction; 
        console.log(auction);
        return (
            <div className="home-element-padding"> 
            <div className="card-container">
                <div className='container-fluid' >
                    <div className="row">
                    <div className=" col-sm-6">
                        <Card className=" bg-warning.bg-gradient">
                            <Card.Header className={"bg-warning text-white text-center"}> Product Details  </Card.Header>
                             <Card.Body>
                                <div className='card-image-container'>
                                    <img
                                        src={require('../images/vase.jpeg')}
                                        alt="First slide"
                                    />
                                    <div className="image-desc-container">
                                        <p>
                                            <b>Description </b><br></br>
                                            {auction.product_description}
                                        </p>

                                    </div>

                                </div>
                            </Card.Body>
                             
                        </Card>
                        </div>

                        <div className=" col-sm-6">
                        <Card className=" bg-warning.bg-gradient">
                            <Card.Header className={"bg-warning text-white text-center"}> Bid Details</Card.Header>
                             <Card.Body>
                                <div className="row">
                                    <div className="col-md-4">
                                        <p className="text-dark"> Max Bid  </p> 
                                    </div> 
                                    <div className="col-md-4"> </div>
                                    <div className="col-md-4">
                                        <p className="bg-success bg-gradient text-white text-center  rounded-pill">
                                            $
                                            {this.state.auction.max_bid }
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <p className="text-dark"> Your Last Bid  </p> 
                                    </div> 
                                    <div className="col-md-4"> </div>
                                    <div className="col-md-4">
                                        <p className="bg-success bg-gradient text-white text-center  rounded-pill">
                                            $
                                            {this.state.auction.bid_amount }
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <p className="text-dark"> Time Remaining  </p> 
                                    </div> 
                                    <div className="col-md-4"> </div>
                                    <div className="col-md-4">
                                        <p className="bg-success bg-gradient text-white text-center  rounded-pill">
                                            Hr
                                            {this.state.auction.bid_amount }
                                        </p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <form >
                                        <div className="form-group">
                                            <label htmlFor="place_bid">Place Your Bid</label>
                                            <input type="number" className="form-control border-warning" id="bidAmount" name="bidAmount" placeholder='Enter amount'/>

                                        </div>
                                        <div className="d-grid gap-2 col-6 mx-auto text-container">
                                            <Button type="submit" className="btn btn-success btn-lg btn-block" onClick={this.onSubmit}> Bid </Button>
                                        </div>
                                    </form>

                                </div>
                            </Card.Body>  
                        </Card>
                        </div> 
                    </div>
                    <Card className=" bg-warning.bg-gradient">
                            <Card.Header className={"bg-warning text-white text-center"}> Chat Room </Card.Header>
                             <Card.Body>
                                <div className=''>
                                    <Message/>

                                </div>
                            </Card.Body> 
                        </Card>
                </div>
            </div></div>
        )
    }


export default LiveAuction
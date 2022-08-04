import React, { Component } from 'react'
import {Card,Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import './Card.css'
import axios from "axios";
import Message from './Message';

export class LiveAuctions extends Component {
    constructor(props){
        super(props);
        this.state = {
            auction:[],
            bid_amount:0,
            user_id : localStorage.getItem('user_id'),
            user_token: localStorage.getItem('user')
        }
    }
    // on click of submit button, display the bid amount on alert
    onSubmit = e => {
        e.preventDefault();
        this.state.bid_amount = document.getElementById("bidAmount").value;

        if (this.state.bid_amount < this.state.auction.max_bid || this.state.bid_amount === this.state.auction.max_bid || this.state.bid_amount === 0 || this.state.bid_amount === ""
            || this.state.bid_amount === null || this.state.bid_amount === undefined || this.state.bid_amount < this.state.auction.minimum_price) {
            alert("Enter valid bid amount");
        }
        else{
            alert("Bid Amount: " + this.state.bid_amount);
            let auction_id = this.state.auction.id;
            let max_bidder_id = this.state.user_id;
            let url = "http://localhost:8080/auction_products/update/max_bid/" + auction_id;
            axios.put(url,
                {},
                {
                    params:{
                        user_id:max_bidder_id,
                        max_bid: this.state.bid_amount
                    },
                    data: {
                        token: this.state.user_token
                    }
                })
                .then(response=>{
                    console.log(response)
                })
                .catch(error=>{
                    console.log(error.response)
                });
            window.location.reload();
        }


    }

    componentDidMount() {
        // get data from axios get request
        // save the data in auction
        axios.get("http://localhost:8080/auction_products/auction/12")
            .then(response =>response.data)
            .then((data)=>{
                this.setState({auction: data});
            })

    }
    render() {
        return (
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
                                            {this.state.auction.product_description}
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
                                            {this.state.auction.bid_amount }
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
            </div>
        )
    }
}

export default LiveAuctions
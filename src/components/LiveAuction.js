import React, {useEffect, useState} from 'react'
import {Card,Button} from "react-bootstrap";

import './Card.css'
import axios from "axios";
import Message from './Message';
import {useLocation, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function LiveAuction () {
    const {state} = useLocation();
    let user_id = localStorage.getItem('user_id');
    const navigate = useNavigate();
    let [auction, setAuction] = useState([]);
    let auction_id = state.auctionId;
    let my_last_bid = 0;

    const fetchLiveAuction = () => {
        let url = "http://localhost:8080/auction_products/auction/" + auction_id;
        axios.get(url).then(r => {
            setAuction(r.data);
            console.log(r.data);
        }).catch(e => {
            toast.error("Error fetching auction");
        });

    }

    const placeBid = () => {
        let bid_amount = document.getElementById("bidAmount").value;

        if (bid_amount < auction.max_bid || bid_amount === auction.max_bid || bid_amount === 0
        || bid_amount === null || bid_amount === undefined || bid_amount === "" || bid_amount < auction.minimum_price){
            toast.error("Bid amount must be greater than current bid amount");
        }
        else{
            let url = "http://localhost:8080/auction_products/update/max_bid/" + auction_id;
            axios.put(url,
                {},
                {
                    params: {
                        user_id: user_id,
                        max_bid: bid_amount
                    },
                    data: {
                        token: localStorage.getItem('user')
                    }
                })
                .then(response => {
                  if (response.status === 200){
                      toast.success("Bid placed");
                        document.getElementById("bidAmount").value = "";
                        my_last_bid = bid_amount;

                  }
                }).catch(error => {
                    toast.error("Error placing bid");
            })

        }

    }

    // TODO: REMOVE [] from useEffect
    useEffect(() => {
        fetchLiveAuction();
    },[]);



    return (
        <div className="home-element-padding">
        <div className="card-container">
            <div className='container-fluid' >
                <div className="row">
                <div className=" col-sm-6">
                    <Card className=" bg-warning.bg-gradient">
                        <Card.Header className={"bg-warning text-white text-center"}> Product Details </Card.Header>
                         <Card.Body>
                            <div className='card-image-container'>
                                <img
                                    src={auction.photos}
                                    alt="product image"
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
                                     <p className="text-dark">Minimum Bid</p>
                                 </div>
                                 <div className="col-md-4"> </div>
                                 <div className="col-md-4">
                                     <p className="bg-success bg-gradient text-white text-center  rounded-pill">
                                         ${auction.minimum_price}
                                     </p>
                                 </div>
                             </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <p className="text-dark"> Max Bid  </p>
                                </div>
                                <div className="col-md-4"> </div>
                                <div className="col-md-4">
                                    <p className="bg-success bg-gradient text-white text-center  rounded-pill">
                                        ${auction.max_bid}
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
                                        ${my_last_bid}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <p className="text-dark"> Auction Ending </p>
                                </div>
                                <div className="col-md-4"> </div>
                                <div className="col-md-4">
                                    <p className="bg-success bg-gradient text-white text-center  rounded-pill">
                                        {Math.ceil((new Date(auction.auction_end_date) - new Date().getTime())/ (1000 * 60 * 60 ))} Hours
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
                                        <Button className="btn btn-success btn-lg btn-block" onClick={() => placeBid()}> Bid </Button>
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
                                {/*<Message/>*/}
                            </div>
                        </Card.Body>
                    </Card>
            </div>
        </div></div>
    )
}


export default LiveAuction
import React, {useEffect, useState} from 'react';
import {Button, Card} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";

function ShowAuctionDetails() {
    const {state} = useLocation();
    let auction_id = state.auctionId;
    let user_id = localStorage.getItem('user_id');
    const navigate = useNavigate();
    const [auction, setAuction] = useState([]);

    const fetchAuction = () => {
        let url = "http://localhost:8080/auction_products/auction/" + auction_id;
        axios.get(url).then(r => {
            setAuction(r.data);
            console.log(r.data);
        }).catch(e => {
            toast.error("Error fetching auction");
        });
    }

    const messageSeller = (seller_id) => {
        //navigate('message', {state: {user: id1, other: id2}});
        navigate('message', {state: {user: user_id, other: seller_id}});
    }


    function AddToSave(id){
        let url = "http://localhost:8080/savedAuctions/create/user/" + user_id + "/auction/" + id + "/" + localStorage.getItem('user');
        axios({
            method: 'post',
            url: url,
            headers: {},
            data: {
                date: new Date(),
            }
        }).then(response => {
            if (response.data!=null){
                if (response.status === 200){
                    toast.success("Auction added to saved auctions");
                    document.getElementById(id).disabled = true;
                }
            }
        }).catch(error => {
            toast.error("Error adding auction to saved auctions");
            document.getElementById(id).disabled = true;
        });
    }

    const viewAndBid = (auction_id) => {
        navigate("/liveAuction", {state: {auctionId: auction_id}});
    }

    useEffect(() => {
        fetchAuction();
    }, []);




    return (
        <div className="home-element-padding">
            <div className="card-container">
                <div className='container-fluid' >

                    <div className="row">
                        <div className=" col-sm-12">
                            <Card className=" bg-warning.bg-gradient">

                                <Card.Header className={"bg-warning text-white text-center"}>{auction.product_name}</Card.Header>
                                <Card.Body >
                                    <div className="card-image-container text-center">
                                        <img
                                            src={auction.photos}
                                            alt="Product image"
                                        />
                                    </div>
                                    <div className="row">
                                        <div className=" col-sm-12">
                                            {auction.sold === true ? <p className={"bg-danger text-white text-center rounded-pill text-padding"}> Sold </p> : <p className={"bg-warning text-white text-center rounded-pill text-padding"}> Not Sold Yet </p>}

                                            <p className={"bg-warning text-white text-center rounded-pill text-padding"}> Product Id :: {auction.id} </p>
                                            <Card className=" bg-warning.bg-gradient">
                                                <Card.Header className={"bg-secondary text-white text-center"}> Product description</Card.Header>
                                                <Card.Body >
                                                    <p className='card-body-container'>
                                                        {auction.product_description}
                                                    </p>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className=" col-sm-12">
                                            <Card className=" bg-warning.bg-gradient">
                                                <Card.Header className={"bg-dark text-white text-center "}> Bid Details</Card.Header>
                                                <Card.Body  >
                                                    <div className="row rounded-pill">
                                                        <div className="col-md-4">
                                                            <p className="bg-secondary bg-gradient text-white  rounded-pill  text-padding">
                                                                Bid Status  </p> </div> <div className="col-md-4"> </div>
                                                        <div className="col-md-4">
                                                            <p className="bg-secondary bg-gradient text-white  rounded-pill  text-padding">
                                                                {auction.ongoing === true ? "Ongoing" : "Closed"}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="row rounded-pill">
                                                        <div className="col-md-4"> <p className="bg-secondary bg-gradient text-white  rounded-pill  text-padding">
                                                            Minimum Price  </p> </div> <div className="col-md-4"> </div>
                                                        <div className="col-md-4"> <p className="bg-secondary bg-gradient text-white  rounded-pill  text-padding">
                                                            {auction.minimum_price}$  </p> </div>
                                                    </div>

                                                    <div className="row  rounded-pill " >
                                                        <div className="col-md-4"> <p className="bg-secondary bg-gradient text-white  rounded-pill  text-padding">
                                                            Current Bid  </p> </div> <div className="col-md-4"> </div>
                                                        <div className="col-md-4"> <p className="bg-secondary bg-gradient text-white  rounded-pill  text-padding">
                                                            {auction.max_bid}$  </p> </div>
                                                    </div>

                                                    <div className="row  rounded-pill " >
                                                        <div className="col-md-4"> <p className="bg-secondary bg-gradient text-white  rounded-pill  text-padding">
                                                            Start Time  </p> </div> <div className="col-md-4"> </div>
                                                        <div className="col-md-4"> <p className="bg-secondary bg-gradient text-white  rounded-pill  text-padding">
                                                            {auction.auction_start_date}  </p> </div>
                                                    </div>

                                                    <div className="row  rounded-pill " >
                                                        <div className="col-md-4"> <p className="bg-secondary bg-gradient text-white  rounded-pill  text-padding">
                                                            End Time  </p> </div> <div className="col-md-4"> </div>
                                                        <div className="col-md-4"> <p className="bg-secondary bg-gradient text-white  rounded-pill  text-padding">
                                                            {auction.auction_end_date}  </p> </div>
                                                    </div>

                                                    <div className="row  rounded-pill " >
                                                        <div className="col-md-4"> <p className="bg-secondary bg-gradient text-white  rounded-pill  text-padding">
                                                            Address  </p> </div> <div className="col-md-4"> </div>
                                                        <div className="col-md-4"> <p className="bg-secondary bg-gradient text-white  rounded-pill  text-padding">
                                                            {auction.address}  </p> </div>
                                                    </div>

                                                    <div className="row  rounded-pill " >
                                                        <Button className="bg-danger bg-gradient text-white  rounded-pill  text-padding" onClick={() => messageSeller(auction.owner.id) }>Message the seller</Button>
                                                    </div>

                                                    <div className="row  rounded-pill " >
                                                        <Button className="bg-warning bg-gradient text-white  rounded-pill  text-padding" id={auction_id} onClick={() => AddToSave(auction_id) }>Save this auction</Button>
                                                    </div>

                                                    {auction.ongoing === true ?
                                                        <div className="row  rounded-pill " >
                                                            <Button className="bg-warning bg-gradient text-white  rounded-pill  text-padding" onClick={() => viewAndBid(auction_id) }>Bid in live auction</Button>
                                                        </div>
                                                        : null}

                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ShowAuctionDetails;
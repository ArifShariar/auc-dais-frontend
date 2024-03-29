import React from 'react'
import {Card,Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Card.css' ;
import axios from "axios";
import RatingReviewAdd from '../RatingReviewAdd';

class ShowAuctionDetails extends React.Component{
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

    render(){
        return (
            <div className="home-element-padding">
                <div className="card-container">
                    <div className='container-fluid' >

                        <div className="row">
                            <div className=" col-sm-12">
                                <Card className=" bg-warning.bg-gradient">

                                    <Card.Header className={"bg-warning text-white text-center"}>{this.state.auction.product_name}</Card.Header>
                                    <Card.Body >
                                        <div className="card-image-container">
                                            <img
                                                src={require('../../images/vase.jpeg')}
                                                alt="First slide"
                                            />
                                            <div className="card-body-container">
                                                <p>
                                                    <b>Description </b><br></br>
                                                    {this.state.auction.product_description}
                                                </p>

                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className=" col-sm-12">
                                                <p className={"bg-warning text-white text-center rounded-pill text-padding"}> used or not ,if used then used time period amount </p>
                                                <p className={"bg-warning text-white text-center rounded-pill text-padding"}> Product Id :: {this.state.auction.id} </p>
                                                <Card className=" bg-warning.bg-gradient">
                                                    <Card.Header className={"bg-secondary text-white text-center"}> Product description</Card.Header>
                                                    <Card.Body >
                                                        <p className='card-body-container'>
                                                            {this.state.auction.product_description}
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
                                                                    {this.state.auction.ongoing === true ? "Ongoing" : "Closed"}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className="row rounded-pill">
                                                            <div className="col-md-4"> <p className="bg-secondary bg-gradient text-white  rounded-pill  text-padding">
                                                                Minimum Price  </p> </div> <div className="col-md-4"> </div>
                                                            <div className="col-md-4"> <p className="bg-secondary bg-gradient text-white  rounded-pill  text-padding">
                                                                {this.state.auction.minimum_price}$  </p> </div>
                                                        </div>

                                                        <div className="row  rounded-pill " >
                                                            <div className="col-md-4"> <p className="bg-secondary bg-gradient text-white  rounded-pill  text-padding">
                                                                Current Bid  </p> </div> <div className="col-md-4"> </div>
                                                            <div className="col-md-4"> <p className="bg-secondary bg-gradient text-white  rounded-pill  text-padding">
                                                                {this.state.auction.max_bid}$  </p> </div>
                                                        </div>

                                                        <div className="row  rounded-pill " >
                                                            <div className="col-md-4"> <p className="bg-secondary bg-gradient text-white  rounded-pill  text-padding">
                                                                Time Left  </p> </div> <div className="col-md-4"> </div>
                                                            <div className="col-md-4"> <p className="bg-secondary bg-gradient text-white  rounded-pill  text-padding">
                                                                5hr  </p> </div>
                                                        </div>

                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className=" col-sm-12">
                                                 <Card className=" bg-warning.bg-gradient">
                                                    <Card.Header className={"bg-secondary text-white text-center"}> Leave Us a Review</Card.Header>
                                                    <Card.Body >
                                                         <RatingReviewAdd/>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>

                    </div>
                </div></div>
        )
    }

}

export default ShowAuctionDetails





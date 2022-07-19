import React from 'react'
import {Card,Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Card.css' ;
import axios from "axios";

class ShowAuctionDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            auction:[],
        }
    }
    componentDidMount() {
        // get data from axios get request
        // save the data in auction
        axios.get("http://localhost:8080/auction_products/auction/2")
            .then(response =>response.data)
            .then((data)=>{
                this.setState({auction: data});
            })

    }

    render(){
        return (
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
                                            <p className={"bg-warning text-white text-center rounded-pill text-padding"}> Product Id </p>
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
                                                                Onging
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="row rounded-pill">
                                                        <div className="col-md-4"> <p className="bg-secondary bg-gradient text-white  rounded-pill  text-padding">
                                                            Minimum Price  </p> </div> <div className="col-md-4"> </div>
                                                        <div className="col-md-4"> <p className="bg-secondary bg-gradient text-white  rounded-pill  text-padding">
                                                            500$  </p> </div>
                                                    </div>

                                                    <div className="row  rounded-pill " >
                                                        <div className="col-md-4"> <p className="bg-secondary bg-gradient text-white  rounded-pill  text-padding">
                                                            Current Bid  </p> </div> <div className="col-md-4"> </div>
                                                        <div className="col-md-4"> <p className="bg-secondary bg-gradient text-white  rounded-pill  text-padding">
                                                            50000$  </p> </div>
                                                    </div>

                                                    <div className="row  rounded-pill " >
                                                        <div className="col-md-4"> <p className="bg-secondary bg-gradient text-white  rounded-pill  text-padding">
                                                            Time Left  </p> </div> <div className="col-md-4"> </div>
                                                        <div className="col-md-4"> <p className="bg-secondary bg-gradient text-white  rounded-pill  text-padding">
                                                            5hr  </p> </div>
                                                    </div>
                                                    <Card className=" card-container">
                                                        <Card.Header className={"bg-success text-white text-center text-padding"}> Place Your Bid</Card.Header>
                                                        <Card.Body >
                                                            <div className='card-header'>
                                                                <form >
                                                                    <div className="form-group">
                                                                        <label htmlFor="place_bid">Enter amount</label>
                                                                        <input type="number" className="form-control" id="bidAmount" name="product_name" />

                                                                    </div>
                                                                    <div className="d-grid gap-2 col-6 mx-auto text-container">
                                                                        <Button type="submit" className="btn btn-secondary btn-lg btn-block"> Bid</Button>
                                                                    </div>
                                                                </form>

                                                            </div>

                                                        </Card.Body>
                                                    </Card>

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
        )
    }

}

export default ShowAuctionDetails





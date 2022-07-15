import React from "react";
import {Card, ListGroup} from "react-bootstrap";
import axios from "axios";

class AddAuctionConfirm extends React.Component{
    continue = e => {
        e.preventDefault();
        // api call here
        // use axios to post to server
        const {values : {product_name, product_description, minimum_price, start_date, start_time, end_date, end_time,
            is_online, address, photos, tags}} = this.props;
        let url = "http://localhost:8080/auction_products/create?product_name=" + product_name + "&product_description="
            + product_description + "&minimum_price=" + minimum_price + "&start_date=" + start_date + "&start_time="
            + start_time + "&end_date=" + end_date + "&end_time=" + end_time + "&is_online=" + is_online + "&address="
            + address + "&photos=" + photos + "&tags=" + tags;

        axios.post(url, {
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error.response)
            });


        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const marginTop = {
            marginTop: "10px"
        }
        const {values : {product_name, product_description, minimum_price, start_date, start_time, end_date, end_time,
        auction_type, address, photos, tags}} = this.props;
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header className={"bg-dark text-white text-center"}>Confirm Auction Information</Card.Header>
                <Card.Body>
                    <ListGroup>
                        <ListGroup.Item>Product Name: {product_name}</ListGroup.Item>
                        <ListGroup.Item>Product Description: {product_description}</ListGroup.Item>
                        <ListGroup.Item>Minimum Bid: {minimum_price}</ListGroup.Item>
                        <ListGroup.Item>Start Date: {start_date}</ListGroup.Item>
                        <ListGroup.Item>Start Time: {start_time}</ListGroup.Item>
                        <ListGroup.Item>End Date: {end_date}</ListGroup.Item>
                        <ListGroup.Item>End Time: {end_time}</ListGroup.Item>
                        <ListGroup.Item>Auction Type: {auction_type}</ListGroup.Item>
                        <ListGroup.Item>Address: {address}</ListGroup.Item>
                        <ListGroup.Item>Photos: {photos}</ListGroup.Item>
                        <ListGroup.Item>Tags: {tags}</ListGroup.Item>

                    </ListGroup>
                    <div className="form-group text-center" style={marginTop}>
                        <button type="submit" className="btn btn-primary" onClick={this.continue}>Confirm</button>
                    </div>
                    <div className="form-group text-center" style={marginTop}>
                        <button type="submit" className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>

                </Card.Body>
            </Card>
        );
    }
}
export default AddAuctionConfirm;
import React from "react";
import {Card} from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import axios from "axios";
import './Card.css'
// this class will show the saved auctions by a user

class SavedAuctions extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            auctions: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/auction_products/all").then(res => {
            console.log(res.data);
        })
    }

    render() {
        return (
            <div className="card-container">
                <div className='container-fluid' >
                    <div className="row">
                        <div className=" col-sm-12">
                        <Card className=" bg-warning.bg-gradient">
                            <Card.Header className={"bg-warning text-white text-center"}> Vase picture</Card.Header>
                                <Card.Body>
                                    <Table bordered hover striped responsive>
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th className={"text-center"}>Auction Product</th>
                                            <th className={"text-center"}>Owner</th>
                                            <th className={"text-center"}>Max Bid</th>
                                            <th className={"text-center"}>Start Date</th>
                                            <th className={"text-center"}>End Date</th>
                                            <th colSpan={2} className={"text-center"}>Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Casio Calculator</td>
                                                <td>John Doe</td>
                                                <td>500</td>
                                                <td>12/05/2022:12.00pm</td>
                                                <td>14/05/2022:12.00pm</td>
                                                <td><Button >View</Button></td>
                                                <td><Button variant="danger">Delete</Button></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Casio Calculator</td>
                                                <td>John Doe</td>
                                                <td>500</td>
                                                <td>12/05/2022:12.00pm</td>
                                                <td>14/05/2022:12.00pm</td>
                                                <td><Button >View</Button></td>
                                                <td><Button variant="danger">Delete</Button></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Casio Calculator</td>
                                                <td>John Doe</td>
                                                <td>500</td>
                                                <td>12/05/2022:12.00pm</td>
                                                <td>14/05/2022:12.00pm</td>
                                                <td><Button >View</Button></td>
                                                <td><Button variant="danger">Delete</Button></td>
                                            </tr>
                                    </tbody>
                                </Table>

                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>

        </div>
        );
    }
}

export default SavedAuctions;
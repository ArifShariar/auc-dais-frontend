import React from "react";
import {Card, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";



function SearchResult (props){
    let searched_auctions = props.name;
    alert(searched_auctions);

    return (
        <div className="card-container">
            <div className='container-fluid' >
                <div className="row">
                    <div className=" col-sm-12">
                        <Card className=" bg-warning.bg-gradient">
                            <Card.Header className={"bg-warning text-white text-center"}> Saved Auctions </Card.Header>
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
                                            <td colSpan={7} className={"text-center"}>No saved auctions</td>
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

export default SearchResult;
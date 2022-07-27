import React from "react";
import {Card, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useLocation} from "react-router-dom";



function SearchResult() {
    const {state} = useLocation();
    console.log(state.searchResult);
    // get search_keyword from url
    let search_result = state.searchResult;



            return(
                <div className="card-container">
                    <div className='container-fluid' >
                        <div className="row">
                            <div className=" col-sm-12">
                                <Card className=" bg-warning.bg-gradient">
                                    <Card.Header className={"bg-warning text-white text-center"}> Search Result </Card.Header>
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
                                            {search_result.length === 0 ?
                                                <tr>
                                                    <td colSpan={7} className={"text-center"}>No Matching Result</td>
                                                </tr> :
                                                search_result.map((auction, index) => {
                                                    return (
                                                        <tr key={auction.id}>
                                                            <td>{index + 1}</td>
                                                            <td>{auction.product_name}</td>
                                                            <td>{auction.owner.firstName}</td>
                                                            <td>{auction.max_bid}</td>
                                                            <td>{auction.auction_start_date}</td>
                                                            <td>{auction.auction_end_date}</td>
                                                            <td>
                                                                <Button variant="outline-danger" size="sm" >View</Button>
                                                            </td>
                                                            <td>
                                                                <Button variant="outline-success" size="sm">Add to Wishlist</Button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }

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
import React from "react";
import {Card, Col, ListGroup, Row} from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";


function Profile () {

    const saveChanges = () => {
        alert("clicked")
    }

    const padding_top ={
        paddingTop: '10px'
    }

    const padding_top_bottom_between_text ={
        paddingTop: '10px',
        paddingBottom: '10px'
    }


    return (
        <div className="home-element-padding">
        <div className={"card-container"}>
            <div className={"container-fluid"}>
                <Card className="bg-warning.bg-gradient" >
                    <Card.Header className={"bg-warning text-white text-center"}>Profile</Card.Header>
                    <Card.Body>
                        <Container>
                            <Row xs={1} md={2}>
                                <Col>
                                    <div style={{borderRadius: '50% !important', backgroundColor: '#f5f5f5', width: '150px', height: '150px', margin: 'auto'}}>
                                        <img
                                            src={require("../images/login-auction.jpg")}
                                            alt="online-auctions photo"
                                            height={'100%'}
                                            width={'100%'}
                                        />
                                    </div>
                                </Col>
                                <Col>2 of 3</Col>
                                <Col>3 of 3</Col>
                            </Row>
                        </Container>
                        <div className="d-grid gap-2 col-6 mx-auto text-container" >
                            <button type="submit" className="btn btn-info text-white" onClick={saveChanges}>Save Changes</button>
                        </div>

                    </Card.Body>
                </Card>
            </div>
        </div></div>
    );
}

export default Profile;
import React from "react";
import {Card, Col, ListGroup, Row} from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {BsFillBellFill} from "react-icons/bs";
import "./Card.css"


function Profile () {

    const saveChanges = () => {
        alert("clicked")
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
                                    <div style={{ borderRadius: '25% !important',backgroundColor: '#f5f5f5', width: '150px', height: '150px'}}>
                                        <img
                                            src={require("../images/man-profile.webp")}
                                            alt="online-auctions photo"
                                            height={'100%'}
                                            width={'100%'}
                                        />
                                        <div className="text-container">
                                            <p className="profile-tile"> 
                                                Name<br></br>
                                                Email<br></br> 
                                                Address<br></br> 
                                                Contact Number<br></br> 
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div class="form-group"> 
                                        <div className="input-container">
                                            <label for ="name" >User Name </label>
                                            <input type ="text" class="form-control textarea" id="name" placeholder="change user name"></input>
                                        </div>
                                        <div className="input-container">
                                            <label for ="email" >User Email </label>
                                            <input type="email" class="form-control textarea" id="email" placeholder="change Email"></input>
                                        </div>
                                        <div className="input-container">
                                            <label for ="password" >Change your Password </label>
                                            <input type="password" class="form-control textarea" id="password" placeholder="change Password"></input>
                                        </div>

                                        <div className="d-grid gap-2 col-6 mx-auto text-container">
                                            <button type="submit" className="btn btn-danger" >Save Profile</button>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div class=""> 
                                        <div className="input-container">
                                            <label>Do you like get email about ongoing auctions?<br/>Click the Bell <BsFillBellFill type="submit" /></label>
                                        </div>
                                        <div className="input-container">
                                            <label>Do you like to get promotional mail? Click <button type="button" class="btn btn-outline-warning">Yes</button> ! </label> 

                                        </div> 
                                    </div></Col>
                            </Row>
                        </Container>
                        {/* <div className="d-grid gap-2 col-6 mx-auto text-container" >
                            <button type="submit" className="btn btn-info text-white" onClick={saveChanges}>Save Changes</button>
                        </div> */}

                    </Card.Body>
                </Card>
            </div>
        </div></div>
    );
}

export default Profile;
import React, {useEffect, useState} from "react";
import {Card, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {BsFillBellFill} from "react-icons/bs";
import "./Card.css"
import axios from "axios";
import {ButtonGroup, ToggleButton} from "@mui/material";

function Profile () {
    let user_id = localStorage.getItem('user_id');
    let user_token = localStorage.getItem('user');
    let [user, setUser] = useState();


    useEffect(() => {
        let url = "http://localhost:8080/users/get/" + user_id;
        axios({
            method: 'get',
            url: url,
            headers: {},
            data: {}
        }).then(response =>{
            if (response.data!==null){
                setUser(response.data);
            }
        })
    }, []);


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
                                            src={"http://localhost:8080/files/howto.PNG"}
                                            alt="online-auctions photo"
                                            height={'100%'}
                                            width={'100%'} 
                                        />
                                        <div className="text-container">
                                            <p className="profile-tile"> 
                                                Name: <br></br>
                                                Email: <br></br>
                                                Address: <br></br>
                                                Contact Number: <br></br>
                                            </p>
                                        </div>
                                    </div>
                                </Col>

                                <Col>
                                    <div className="form-group">
                                        <div className="input-container">
                                            <label htmlFor="first_name" >First Name</label>
                                            <input type ="text" className="form-control textarea" id="first_name" placeholder="Arif"></input>
                                        </div>
                                        <div className="input-container">
                                            <label htmlFor="last_name">First Name</label>
                                            <input type="text" className="form-control textarea" id="last_name" placeholder="Shariar"></input>
                                        </div>
                                        <div className="input-container">
                                            <label htmlFor="email">Email </label>
                                            <input type="email" className="form-control textarea" id="email" placeholder="change Email"></input>
                                        </div>
                                        <div className="input-container">
                                            <label htmlFor="password" >Change your Password </label>
                                            <input type="password" className="form-control textarea" id="password" placeholder="change Password"></input>
                                        </div>

                                        <div className="d-grid gap-2 col-6 mx-auto text-container">
                                            <button type="submit" className="btn btn-danger" onClick={saveChanges} >Save Profile</button>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="">
                                        <div className="input-container">
                                            <label>Do you like get email about ongoing auctions?<br/>Click the Bell <BsFillBellFill type="submit" /></label>
                                        </div>

                                        <div className="input-container">
                                            <label>Do you like to get promotional mail? Click <button type="button" className="btn btn-outline-warning">Yes</button> ! </label>
                                        </div>
                                    </div>
                                </Col>
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
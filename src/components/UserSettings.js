import React, {useEffect, useState} from "react";
import {Card, Col, Row, Container} from "react-bootstrap";
// import { ToggleSlider } from 'react-toggle-slider';
import ToggleAucdais from "./ToggleAucdais";
import "./Card.css";
import axios from "axios";
import {toast} from "react-toastify";

function UserSettings () {

    const [aucEmail, setAucEmail] = useState(false);
    const [promotional, setPromotional] = useState(false);

    let user_id = localStorage.getItem('user_id');
    let user_token = localStorage.getItem('user');


    let checkbox1 = false;
    let checkbox2 = false;
    
    const checkFirst = (event) => {
        if (event.target)
            checkbox1 = !checkbox1;
        console.log("The checkbox1 value is: " + checkbox1);
        let url = "http://localhost:8080/users/" + user_id + "/update/receive_saved_notification_email/" + checkbox1 + "/" + user_token;
        axios.put(url).then(response => {
            if(response.data != null) {
                if(response.status === 200) {
                    toast.success("Updated preferences");
                }
                else {
                    alert("Failed to update");
                }
            }
        });

    }

    const checkSecond = (event) => {
        if (event.target)
            checkbox2 = !checkbox2;
        console.log("The checkbox2 value is: " + checkbox2);

        let url = "http://localhost:8080/users/" + user_id + "/update/receive_message_email/" + checkbox2 + "/" + user_token;
        axios.put(url).then(response => {
            if(response.data != null) {
                if(response.status === 200) {
                    toast.success("Updated preferences");
                }
                else {
                    alert("Failed to update");
                }
            }
        });
    }

    
    return (
        <div className="home-element-padding">
        <div className={"card-container"}>
            <div className={"container-fluid"}>
                <Card className="bg-warning.bg-gradient" >
                    <Card.Header className={"bg-warning text-white text-center"}>Settings</Card.Header>
                    <Card.Body>
                        <Container>
                            <div className="">
                                <div className="input-container">
                                    <span>
                                        Do you like get email about saved auctions?&emsp;
                                        <ToggleAucdais onChange={checkFirst}/>
                                    </span>
                                </div>

                                <div className="input-container">
                                    <label>Do you like to get mail for messages?&emsp;
                                        <ToggleAucdais onChange={checkSecond}/>
                                    </label>
                                </div>
                            </div>
                        </Container>
                    </Card.Body>
                </Card>
            </div>
        </div>
        </div>
    );
}
export default UserSettings;
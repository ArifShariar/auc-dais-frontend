import React, {useEffect, useState} from "react";
import {Card, Col, Row, Container} from "react-bootstrap";
// import { ToggleSlider } from 'react-toggle-slider';
import ToggleAucdais from "./ToggleAucdais";
import "./Card.css";

function UserSettings () {

    const [aucEmail, setAucEmail] = useState(false)
    const [promotional, setPromotional] = useState(false)
    let checkbox1 = false;
    let checkbox2 = false;
    
    const checkFirst = (event) => {
        if (event.target)
            checkbox1 = !checkbox1;
        console.log("The checkbox1 value is: " + checkbox1);
    }

    const checkSecond = (event) => {
        if (event.target)
            checkbox2 = !checkbox2;
        console.log("The checkbox2 value is: " + checkbox2);
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
                                        Do you like get email about ongoing auctions?&emsp;
                                        <ToggleAucdais onChange={checkFirst}/>
                                    </span>
                                </div>

                                <div className="input-container">
                                    <label>Do you like to get promotional mail?&emsp;
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
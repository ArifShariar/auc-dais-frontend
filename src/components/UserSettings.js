import React, {useEffect, useState} from "react";
import {Card, Col, Row, Container} from "react-bootstrap";
import { ToggleSlider } from 'react-toggle-slider';
import "./Card.css";

function UserSettings () {

    const [aucEmail, setAucEmail] = useState(false)
    const [promotional, setPromotional] = useState(false)
    
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
                                        Do you like get email about ongoing auctions?
                                        <ToggleSlider onToggle={state => setAucEmail(state)}/>
                                    </span>
                                </div>

                                <div className="input-container">
                                    {/* <button type="button" className="btn btn-outline-warning">Yes</button> ! */}
                                    <label>Do you like to get promotional mail? </label>
                                    <ToggleSlider onToggle={state => setPromotional(state)}/>
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
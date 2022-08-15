import React, {useEffect, useState} from "react";
import {Card, Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useAuth } from "./context/AuthProvider";
import { useNavigate } from "react-router-dom";

function VerifyEmail() {
    const useauth = useAuth();

    useEffect (()=> {
        if (useauth.isLogin()) {
            window.location.replace("http://localhost:3000")
        }
    });


    return (
        !useauth.isLogin()? (
        <div className="home-element-padding" style={{ alignItems: 'center'}}>
        <div className={"card-container"}>
            <div className={"container-fluid"}>
                <Card className="bg-warning.bg-gradient" >
                    <Card.Header className={"bg-warning text-white text-center"}>Verify Email</Card.Header>
                    <Card.Body>
                        <Container>
                                <div style={{ alignItems: 'center'}}> Please verify your email account </div>
                                <div style={{ alignItems: 'center'}}> To login click <a href="http://localhost:3000/login">here</a></div>
                        </Container>
                    </Card.Body>
                </Card>
            </div>
        </div>
        </div>):window.location.replace("http://localhost:3000")
    );
}

export default VerifyEmail;
import React, {useEffect, useState} from "react";
import {Card, Col, Row, Container} from "react-bootstrap";
// import { ToggleSlider } from 'react-toggle-slider';
import ToggleAucdais from "./ToggleAucdais";
import "./Card.css";
import axios from "axios";
import {toast} from "react-toastify";

function UserSettings () {

    let user_id = localStorage.getItem('user_id');
    let user_token = localStorage.getItem('user');
    const [aucEmail, setAucEmail] = useState(false)
    const [promotional, setPromotional] = useState(false)
    let [loader, setLoader] = useState(false);
    let [checkbox1, setCheckBox1] = useState(false);
    let [checkbox2, setCheckBox2] = useState(false);
    let [checkloader1, setCheckLoader1] = useState(false);
    let [checkloader2, setCheckLoader2] = useState(false);

    useEffect( async () => {
        let url = "http://localhost:8080/users/" + user_id + "/settings/receive_message_email/" + user_token;
        await axios.get(url).then(response =>{
            if (response.data!==null){
                console.log(response.data);
                if(response.data === "TRUE") {
                    //checkbox1 = true;
                    setCheckBox1(true);
                    console.log("Fetched checkbox message: " + checkbox1)
                }
                else if (response.data === "FALSE") {
                    //checkbox1 = false;
                    setCheckBox1(false);
                    console.log("Fetched checkbox message: " + checkbox1)
                }
                setCheckLoader1(true);
            }
        })

        url = "http://localhost:8080/users/" + user_id + "/settings/receive_saved_auc_email/" + user_token;
        await axios.get(url).then(response =>{
            if (response.data!==null){
                console.log(response.data);
                if(response.data === "TRUE") {
                    //checkbox2 = true;
                    setCheckBox2(true);
                    console.log("Fetched checkbox saved: " + checkbox2)
                }
                else if (response.data === "FALSE") {
                    //checkbox2 = false;
                    setCheckBox2(false);
                    console.log("Fetched checkbox saved: " + checkbox2)
                }
                setCheckLoader2(true);
            }
        })
        setLoader(true);
    }, []);
    
    const checkFirst = async (event) => {
        if(checkbox1==true)   {
            setCheckBox1(false);
            checkbox1 = false;
            console.log("Changing from true to false");
        }
        else if (checkbox1==false)  {
            setCheckBox1(true);
            checkbox1 = true;
            console.log("Changing from false to true");
        }

        console.log("clicked and result: " + checkbox1);
        await axios.put("http://localhost:8080/users/"+user_id+"/update/receive_message_email/"+checkbox1+"/"+user_token).then(
            response => {
                if (response.data!=null) {
                    if (response.status === 200) {
                        console.log("successful-message");
                        console.log(checkbox1);
                        toast.success("Updated preferences");
                    }
                    else {
                        alert("Failed to update");
                    }
                }
            }
        );
    }

    const checkSecond = async(event) => {
        if(checkbox2===true) {
            setCheckBox2(false);
            checkbox2 = false;
        }
        else if (checkbox2===false) {
            setCheckBox2(true);
            checkbox2 = true;
        }

        console.log("clicked and result: " + checkbox2);
        await axios.put("http://localhost:8080/users/"+user_id+"/update/receive_saved_notification_email/"+checkbox2+"/"+user_token).then(
            response => {
                if (response.data!=null) {
                    if (response.status === 200) {
                        console.log("successful-saved");
                        console.log(checkbox2);
                        toast.success("Updated preferences");
                    }
                    else {
                        alert("Failed to update");
                    }
                }
            }
        );
    }

    if(loader) {
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
                                        Do you like get email about incoming messages?&emsp;
                                        {checkloader1 && <ToggleAucdais onChange={checkFirst} checkInfo={checkbox1}/>}
                                    </span>
                                </div>

                                <div className="input-container">
                                    <label>Do you like to get promotional mail?&emsp;
                                        {checkloader2 && <ToggleAucdais onChange={checkSecond} checkInfo={checkbox2}/>}
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
}
export default UserSettings;
import React, {useEffect, useState} from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./Card.css"
import axios from "axios";
import {useAuth} from "./context/AuthProvider";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";

function Profile () {
    let user_id = localStorage.getItem('user_id');
    let user_token = localStorage.getItem('user');
    let [user, setUser] = useState();
    let [loader, setLoader] = useState(false);
    let [imageData, setImageData] = useState(null);
    let imageDir = null;
    const useauth = useAuth();
    const navigate = useNavigate();


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
                setLoader(true);
            }
        })
    }, []);


    const saveChanges = () => {
        alert("clicked")
        console.log(imageData);
    }

    const updateProfile = async (event) => {
        event.preventDefault();
        var firstname = document.getElementById('fname').value;
        var lastname = document.getElementById('lname').value;
        var mail = document.getElementById('mail').value;
        var pwd = document.getElementById('pwd').value;
        var addr = document.getElementById('address').value

        await axios.post('http://localhost:8080/files', imageData).then( response => {
            if(response.data != null) {
                if(response.status === 200) {
                    imageDir = response.data.fileDownloadUri;
                    console.log("Working");
                }
            }
        }).catch(error => {
            console.log("Not working " + error.response);
        });

        if(imageDir == null) imageDir = "";
        const updateduser = {
            id: user_id,
            firstName: firstname,
            lastName: lastname,
            email: mail,
            password: pwd,
            phoneNumber: "",
            address: addr,
            dateOfBirth: null,
            image: imageDir
        };

        console.log(updateduser);

        await axios.post("http://localhost:8080/users/update/" + user_token, updateduser).then(
            response => {
                if (response.data != null) {
                    if (response.status === 200) {
                        localStorage.removeItem('user_name');
                        localStorage.removeItem('user_image');
                        useauth.setName(response.data.firstName + " " + response.data.lastName);
                        useauth.setImage(response.data.image);
                        window.location.reload(false);
                    }
                    else if (response.status === 403) {
                        notify("Session Timeout");
                        event.preventDefault();
                        useauth.logout();
                        window.location.replace("http://localhost:3000");
                    }
                }
            }
        ).catch(error => {
            console.log(error.response);
        });
    }

    const changeImage = event => {
        let file = event.target.files[0];
        const image = new FormData();
        image.append('file', file);
        setImageData(image);
    }


    const deletePicture = async(event) => {
        let flag = false;
        var user_image;
        await axios.post("http://localhost:8080/users/delete/photo/" + useauth.isLogin(), {id: user_id}).then(
            response => {
                if(response.data != null) {
                    if(response.status === 200) {
                        user_image = useauth.getImage();
                        useauth.setImage("");
                        flag = true;
                    }
                    else if (response.status === 403) {
                        notify("Session Timeout");
                        event.preventDefault();
                        useauth.logout();
                        window.location.replace("http://localhost:3000");
                    }
                }
            }
        ).catch(error => {
            console.log(error.response);
        });
        console.log("flag is: " + flag);
        if(flag) {
            console.log("image is: " + user_image);
            await axios.post("http://localhost:8080/files/delete", {fileName: user_image}).then(
                response => {
                    window.location.reload(false);
                    console.log("Image delete successful")
                }
            ).catch (
                error => {
                    notify("No image to delete")
                    console.log("Image delete unsuccessful");
                }
            )
        }
    }

    const notify = (msg) => {
        toast.error(msg,
            {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            },
        );
    }

    const updateAddress = async (event) => {
        navigate("/updateAddress");
    }


    if(loader) {
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
                                    <div style={{ borderRadius: '25% !important',backgroundColor: '#f5f5f5', width: '600px', height: '150px'}}>
                                        <img
                                            src={useauth.getImage()?useauth.getImage():"https://raw.githubusercontent.com/PhenoApps/Field-Book/master/.github/blank-profile.png?s=100"}
                                            alt="online-auctions photo"
                                            height={'100%'}
                                            width={'25%'}
                                        />
                                        <div className="text-container">
                                            <p className="profile-tile"> 
                                                <b>Name</b>: {useauth.getName()}<br></br>
                                                <b>Email</b>: {user.email}<br></br>
                                                <b>Address</b>: {user.address}<br></br>
                                                <b>Contact Number</b>: {user.phoneNumber}<br></br>
                                                <b>Date of Birth</b>: {user.dateOfBirth}<br></br>
                                                <br></br>
                                                <button onClick={deletePicture} type="submit" className="btn btn-danger" >Delete Photo</button>
                                            </p>
                                        </div>
                                    </div>
                                </Col>

                                <Col>
                                <form encType={"multipart/form-data"}>
                                    <div className="form-group">
                                        <div className="input-container">
                                            <label htmlFor="name" >First Name</label>
                                            <input type ="text" className="form-control textarea" id="fname" placeholder={user.firstName}></input>
                                        </div>
                                        <div className="input-container">
                                            <label htmlFor="name">Last Name</label>
                                            <input type="text" className="form-control textarea" id="lname" placeholder={user.lastName}></input>
                                        </div>
                                        <div className="input-container">
                                            <label htmlFor="email">Email </label>
                                            <input type="email" className="form-control textarea" id="mail" placeholder={user.email}></input>
                                        </div>
                                        <div className="input-container">
                                            <label htmlFor="password" >Change your Password </label>
                                            <input type="password" className="form-control textarea" id="pwd" placeholder="password"></input>
                                        </div>

                                        <div className="input-container">
                                            <label htmlFor="address" >Address</label>
                                            <input type="text" className="form-control textarea" id="address" placeholder={user.address} readOnly={true}></input>
                                            <Button className="btn btn-success btn-lg btn-block" onClick={updateAddress}> Update Address </Button>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="photos">Profile Picture</label>
                                            <input type="file" className="form-control" id="photos" accept="image/png, image/gif, image/jpeg"
                                                aria-describedby="photos" placeholder="Photos" name="photos"
                                                onChange={changeImage} required={false} multiple={true}/>
                                        </div>

                                        <div className="d-grid gap-2 col-6 mx-auto text-container">
                                            <button onClick={updateProfile} type="submit" className="btn btn-danger" >Save Profile</button>
                                        </div>
                                    </div>
                                </form>
                                </Col>
                            </Row>
                        </Container>
                            </Card.Body>
                        </Card>
                    </div>
                </div></div>
        );
    }
}

export default Profile;
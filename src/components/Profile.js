import React, {useEffect, useState} from "react";
import {Card, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {BsFillBellFill} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import "./Card.css"
import axios from "axios";
import {useAuth} from "./context/AuthProvider";

function Profile () {
    let user_id = localStorage.getItem('user_id');
    let user_token = localStorage.getItem('user');
    let [user, setUser] = useState();
    let [loader, setLoader] = useState(false);
    let [imageData, setImageData] = useState(null);
    let imageDir = null;
    const useauth = useAuth();


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
        var addr = document.getElementById('addr').value;

        await axios.post('http://localhost:8080/files', imageData).then( response => {
            if(response.data != null) {
                if(response.status == 200) {
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
                    if (response.status == 200) {
                        localStorage.removeItem('user_name');
                        localStorage.removeItem('user_image');
                        useauth.setName(response.data.firstName + " " + response.data.lastName);
                        useauth.setImage(response.data.image);
                        window.location.reload(false);
                    }
                    else {console.log("2nd axios not working");}
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
                                    <div style={{ borderRadius: '25% !important',backgroundColor: '#f5f5f5', width: '150px', height: '150px'}}>
                                        <img
                                            src={useauth.getImage()?useauth.getImage():"https://raw.githubusercontent.com/PhenoApps/Field-Book/master/.github/blank-profile.png?s=100"}
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
                                <form encType={"multipart/form-data"}>
                                    <div className="form-group">
                                        <div className="input-container">
                                            <label htmlFor="name" >First Name</label>
                                            <input type ="text" className="form-control textarea" id="fname" placeholder={user.firstName}></input>
                                        </div>
                                        <div className="input-container">
                                            <label htmlFor="name">First Name</label>
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
                                            <label htmlFor="address">Address</label>
                                            <input type="text" className="form-control textarea" id="addr" placeholder={user.address}></input>
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
}

export default Profile;
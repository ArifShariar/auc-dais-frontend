import React from "react";
import {Card, Form, Toast} from "react-bootstrap";
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';
import Home from './pages/Home';

class LogInPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.submitForm = this.submitForm.bind(this);
    }

    initialState = {
        email: '',
        password: ''
    }

    submitForm = event => {
        event.preventDefault();
        axios.post('http://localhost:8080/users/login', {email:this.state.email, password:this.state.password}).then(
            response => {
                if(response.data != null) {
                    if(response.status == 200) {
                        this.setState(this.initialState);
                        window.location.replace("http://localhost:3000?id=" + response.data.id);
                    }
                }
            }
        ).catch(error => {
        console.log(error.response)
            // check if the error code is 5**
            if (error.response.status >= 500) {
                alert("Server Error: Failed to login, please try with different credentials");
            }
            else if (error.response.status == 400) {
                this.notify();
            }
        });
    }

    notify = () => {
        toast.error('Wrong email or password',
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

    userChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className="card-container">
                <div className='container-fluid' >
                    <div className="row">
                        <div className=" col-sm-12">
                        <Card className=" bg-warning.bg-gradient">
                            <Card.Header className={"bg-warning text-white text-center"}> Log In</Card.Header> 
                                <Card.Body>
                                    <Form id="signupform" onSubmit={this.submitForm}>
                                        <Form.Group className="mb-3" controlId="inputEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control required value={this.state.email} onChange={this.userChange} type="email" name="email" placeholder="Email" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="inputPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control required value={this.state.password} onChange={this.userChange} type="password" name="password" placeholder="Password" />
                                        </Form.Group>

                                        <div className="form-group d-grid gap-2 col-6 mx-auto text-container">
                                            <button type="submit" className="btn btn-secondary">Submit</button>
                                        </div>
                                    </Form>

                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <ToastContainer/>
            </div>
        );
    }
}

export default LogInPage;
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { useAuth } from './context/AuthProvider';

function NavBar() {
    const navigate = useNavigate();
    const useauth = useAuth();
    let searchResult = [];
    console.log('in navbar'+useAuth);

    const onSubmit = (e) => {
        e.preventDefault();
        let search_keyword = document.getElementById("search_keyword").value;
        axios.get("http://localhost:8080/auction_products/search/" + search_keyword)
            .then(response => response.data)
            .then(data => {
                searchResult = data;
                navigate("/search", {state: {searchResult: searchResult}});

            })
            .catch(error => {
                console.log(error);
            })

    }

    const handleLogout = (event) => {
        event.preventDefault();
        useauth.logout();
        window.location.replace("http://localhost:3000");
    }

    return (
        <Navbar collapseOnSelect expand="lg" sticky="top"> 
                <Link to={""} className="navbar-brand text-white">
                    AucDais
                </Link>
                     <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Enter Keyword"
                                className="mx-2 p-2"
                                aria-label="Search"
                                id="search_keyword"
                                name="search_keyword"
                            />
                            <div className="d-grid gap-2 mx-auto bg-danger text-white ">
                                <Button type="submit" className="btn btn-danger"
                                        onClick={onSubmit}> Search</Button>
                            </div>
                        </Form>
 
                    {!useauth.isLogin() && (
                            <Nav className="ml-auto">
                                <Link to={"login"} className={"nav-link text-white"}>Log In</Link>
                                <Link to={"signup"} className={"nav-link text-white"}>Sign Up</Link>
                            </Nav>
                        )
                    }

                    {useauth.isLogin() && (
                            <Nav className="ml-auto">
                                <Link to={"profile"} className={"nav-link text-white"}>Profile</Link>
                                <Link to={""} className={"nav-link text-white"} onClick={handleLogout}>Logout</Link>
                            </Nav>
                        )
                    } 
        </Navbar>
    )

}

export default NavBar;
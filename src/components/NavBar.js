import React from 'react';
import { NavDropdown, Navbar, Nav, Form, Button, Image } from 'react-bootstrap';
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
        <Navbar collapseOnSelect expand="lg" sticky="top" className={useauth.isLogin()?'py-0':'py-auto'}>
                <Navbar.Brand className="justify-content-end px-3">
                <Link to={""} className="navbar-brand text-white">
                    AucDais
                </Link>
                </Navbar.Brand>

                <Navbar.Collapse className="d-flex justify-content-center">
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
                </Navbar.Collapse>


                    {!useauth.isLogin() && (
                            <Nav className="d-flex justify-content-end mx-3">
                                <Link to={"login"} className={"nav-link text-white"}>Log In</Link>
                                <Link to={"signup"} className={"nav-link text-white"}>Sign Up</Link>
                            </Nav>
                        )
                    }

                    {useauth.isLogin() && (
                            <Nav className="d-flex justify-content-center px-5">
                                <NavDropdown title={
                                            <div className='text-white'>
                                                {useauth.getName()}
                                                <Image className="thumbnail-image" 
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg=="
                                                    roundedCircle
                                                    alt="user pic"
                                                    style={{ width: '30px', height: '25px', margin:'0px 0px 0px 10px'}}
                                                />
                                            </div>
                                        }
                                        id="basic-nav-dropdown"
                                        menuVariant="white"
                                        className='text-white'>

                                    <NavDropdown.Item>
                                        <Link to={"profile"} className={"nav-link text-dark"}>Profile</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>Settings</NavDropdown.Item>

                                    <NavDropdown.Item>
                                    <Link to={""} className={"nav-link text-black"} onClick={handleLogout}>Logout</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        )
                    }
        </Navbar>
    )

}

export default NavBar;
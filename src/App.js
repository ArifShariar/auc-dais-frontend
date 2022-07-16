import './App.css';
import React from 'react';
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Carousels from "./components/Carousel";
import Footer from "./components/Footer";
import LogInPage from "./components/LogIn";
import SignUp from "./components/SignUp";
import History from "./components/History";
import LiveAuctions from "./components/LiveAuctions";
import SavedAuctions from "./components/SavedAuctions";
import Location from './components/Location';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AddAuction from "./components/AddAuction";

function App() {
    const marginTop = {
        marginTop: "10px"
    };

  return (
    <div>
        <Router>
            <NavBar/>
            <Container>
                <Row>
                    <Col lg={12} style={marginTop}>
                        <Routes>
                            {/* <Route path="/" element={<Carousels />} /> */}
                            <Route path="/login" element={<LogInPage/>}/>
                            <Route path="/signup" element={<SignUp/>}/>
                            <Route path="/history" element={<History/>}/>
                            <Route path="/location" element={<Location/>}/>
                            <Route path="/liveAuctions" element={<LiveAuctions/>}/>
                            <Route path="/savedAuctions" element={<SavedAuctions/>}/>
                            <Route path="/addAuction" element={<AddAuction/>}/>
                        </Routes>
                    </Col>

                </Row>
            </Container>
            <Carousels />
            <Footer />
            {/* <div>
                <Container >
                    <Row>
                        <Col lg={12}>
                            <Footer />
                        </Col>
                    </Row>
                </Container> 
            </div>*/}
        </Router>
        
    </div>

  );
}

export default App;

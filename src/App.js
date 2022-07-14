import './App.css';
import React from 'react';
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Carousels from "./components/Carousel";
import Footer from "./components/Footer";
import LogInPage from "./components/LogIn";


function App() {
    const marginTop = {
        marginTop: "10px"
    };


  return (
    <div className="App">
        <NavBar />
        <div>
            <Container>
                <Row>
                    <Col lg={12} style={marginTop}>
                        <Carousels />
                        <LogInPage />
                    </Col>

                </Row>
            </Container>
        </div>

        {/*<SearchResult />*/}
        <div>
            <Container>
                <Row>
                    <Col lg={12} style={marginTop}>
                        <Footer />
                    </Col>
                </Row>
            </Container>
        </div>



    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Carousels from "./components/Carousel";
import searchResults from "./components/SearchResults";
function App() {
    const marginTop = {
        marginTop: "10px"
    };
  return (
    <div className="App">
        <NavBar />
        <Container>
            <Row>
                <Col lg={12} style={marginTop}>
                    <Carousels />
                </Col>

            </Row>
        </Container>
        <searchResults />

    </div>
  );
}

export default App;

import React from "react";
import {Card, ListGroup} from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function AllMessages() {
    const padding_top ={
        paddingTop: '10px'
    }

    const padding_top_bottom_between_text ={
        paddingTop: '10px',
        paddingBottom: '10px'
    }
    return (
        <div className="home-element-padding">
        <div className={"card-container"}>
            <div className={"container-fluid"}>
                <Card className="bg-warning.bg-gradient" >
                    <Card.Header className={"bg-warning text-white text-center"}>Message</Card.Header>
                    <Card.Body>
                        <ListGroup>
                            <ListGroup.Item variant="warning" style={padding_top_bottom_between_text}>Message from sender</ListGroup.Item>
                            <ListGroup.Item variant="info" style={padding_top_bottom_between_text}>Message from receiver</ListGroup.Item>
                        </ListGroup>


                        <div style={padding_top}>
                            <InputGroup className="mb-3" size="lg">
                                <Form.Control
                                    placeholder="Type Message..."
                                    aria-label="Type Message..."
                                    aria-describedby="basic-addon2"
                                    id = "message"
                                />
                                <Button type={"submit"} variant="primary">Send</Button>
                            </InputGroup>
                        </div>

                    </Card.Body>

                </Card>

            </div>

        </div></div>
    );

}

export default AllMessages;
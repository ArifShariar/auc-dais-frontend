import React from "react";
import {Card} from "react-bootstrap";
class LogInPage extends React.Component{
    render() {
        const marginTop = {
            marginTop: "10px"
        }
        return (

            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header className={"bg-dark text-white text-center"}>Log In</Card.Header>
                <Card.Body>
                    <div> 
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <div className="form-group text-center" style={marginTop}>
                                <button type="submit" className="btn btn-primary">Log In</button>
                            </div>

                        </form>
                    </div>

                </Card.Body>
            </Card>
            
        );
    }
}

export default LogInPage;
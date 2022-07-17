import React from "react";
import {Card} from "react-bootstrap";
class LogInPage extends React.Component{
    render() {
        const marginTop = {
            marginTop: "10px"
        }
        return (
            <div className="card-container">
                <div className='container-fluid' >
                    <div className="row">
                        <div className=" col-sm-12">
                        <Card className=" bg-warning.bg-gradient">
                            <Card.Header className={"bg-warning text-white text-center"}> Log In</Card.Header> 
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
                                            <div class="form-group d-grid gap-2 col-6 mx-auto text-container">
                                                <button type="submit" className="btn btn-secondary">Submit</button>
                                            </div>

                                        </form>
                                    </div>

                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default LogInPage;
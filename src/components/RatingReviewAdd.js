import React, { useState } from "react";
import "./RatingReview.css"
import {Card,Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css' ;

class RatingReviewAdd extends React.Component{
    StarRating = () => {
      const [rating, setRating] = useState(0);
      return (
        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={index <= rating ? "on" : "off"}
                onClick={() => setRating(index)}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
        </div>
      );
    };
    render(){
        return(
          <div className="home-element-padding">
            {/* <div className="card-container">
                <div className='container-fluid' >
                    <div className="row">
                        <div className=" col-sm-12">
                        <Card className=" bg-warning.bg-gradient">
                            <Card.Header className={"bg-warning text-white text-center"}> Saved Auctions </Card.Header>
                             <Card.Body> 
                                <div>
                                    <h1 className={"text-center"}>Leave Us a Review</h1>
                                </div>
                                <div>
                                    <h3>
                                        Rate Us
                                        const [rating, setRating] = useState(0);
                                        <div className="star-rating">
                                            {[...Array(5)].map((star, index) => {
                                            index += 1;
                                            <button
                                                type="button"
                                                key={index}
                                                className={index <= rating ? "on" : "off"}
                                                onClick={() => setRating(index)}
                                                >
                                                <span className="star">&#9733;</span>
                                            </button>
                                            })}
                                        </div>
                                    </h3>
                                </div>
                            </Card.Body> 
                        </Card>
                        </div>
                    </div>
                </div>
            </div> */}</div>
        );
    }
}
export default RatingReviewAdd
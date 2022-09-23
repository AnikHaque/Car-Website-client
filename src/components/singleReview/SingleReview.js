import React from 'react';
import { Card, Col } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

const SingleReview = ({ review }) => {

    const { name, description,price,rating,img } = review;
    
    return (
        <div>
            <Col className="text-center">
           
             
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>

                        <Card.Text>
                            {description}
                        </Card.Text>
                       
                        <StarRatings
                            rating={parseFloat(rating)}
                            starRatedColor="tomato"
                            starDimension="25px"
                            numberOfStars={5}
                            name='rating'
                        />
                    </Card.Body>
               
            </Col>

        </div>
    );
};

export default SingleReview;
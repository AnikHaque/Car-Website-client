import React from 'react';
import { Button, Card, CardGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import './IndividualInstructor.css';
const IndividualInstructor = (props) => {
    const {_id,name,description,type,price,img,speed} = props.foods;
    const firstExample = {
      size: 35,
      value:speed,
      edit: false,
    
      
    };
    return (
        <div>
          <Col>
          
          <Card.Img variant="top" src={img} className='img-fluid' />
          <Card.Body>
              <Card.Title className='text-white fw-bold'>{name}</Card.Title>
              
              <Card.Text className='text-white'>
                  $ {price}
              </Card.Text>
          </Card.Body>
          <Card.Body className="d-flex justify-content-between">

              <Card.Text className='text-white'>
                  {speed} KM/h
              </Card.Text>
              <Card.Text className='text-white'>
                   {type}
              </Card.Text>
          </Card.Body>
          <Card.Footer className="m-0 p-0">
                   <Link to={`/cars/${_id}`} > <Button  className="w-100  btn-regular">See Details</Button></Link>
                </Card.Footer>
    
  </Col>
        </div>
    );
};

export default IndividualInstructor;
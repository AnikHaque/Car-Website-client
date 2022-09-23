import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const IndividualProduct = (props) => {
    const {_id, name, rating, description, price, img } = props.foods;
    return (

        <Col>
          
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Body className="d-flex justify-content-between">
   
                    <Card.Text>
                        {rating} KM/h
                    </Card.Text>
                    <Card.Text>
                        $ {price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="m-0 p-0">
                   <Link to={`/cars/${_id}`} > <Button  className="w-100  btn-regular">Buy Now</Button></Link>
                </Card.Footer>
          
        </Col>

    );
};

export default IndividualProduct;
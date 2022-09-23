import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './BuySell.css';
const BuySell = () => {
    return (
        <div className='buy-sell'>
            <Container>
  <Row className='p-5'>
    <Col sm={12} md={6} lg={6} className='bg-light  p-5'>
    <img src='https://thumbs.dreamstime.com/b/looking-car-selling-icon-magnifying-glass-search-logo-deal-vector-illustration-109371324.jpg' className='img-fluid w-50'></img>
<h1>Are You Looking for a car?</h1>
<p>Our cars are delivered fully-registered with all requirements completed. We’ll deliver your car wherever you are.</p>
    </Col>
    <Col sm={12} md={6} lg={6} className='bg-danger p-5'>
        <img src='https://thumbs.dreamstime.com/b/car-line-icon-red-background-flat-style-vector-illustration-179119415.jpg' className='img-fluid w-50'></img>
    <h1>Do You Want to sell a car?</h1>
<p>What’s your car worth? Receive the absolute best value for your trade-in vehicle. We even handle all paperwork. Schedule your appointment today!</p>
    </Col>
  </Row>
</Container>
        </div>
    );
};

export default BuySell;
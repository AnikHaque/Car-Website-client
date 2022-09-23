import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './About.css';
const About = () => {
    return (
        <div className='bg-about'>
          <Container>
  <Row>
    <Col sm={12} md={6} lg={6}>
      <img src='https://motors.stylemixthemes.com/wp-content/uploads/2015/10/about-us-1-529x290.jpg' className='img-fluid'></img>
    </Col>
    <Col sm={12} md={6} lg={6}>
      <h2>WELCOME TO THE MOTORS</h2>
      <p>Before we get ahead of ourselves, we want to welcome you to Loeber Motors. While nothing can replace thing on-the-lot experience.
We appreciate you taking the time today to visit our web site. Our goal is to give you an interactive tour of our new and used inventory, as well as allow you to conveniently get a quote, schedule a service appointment, or apply for financing. The search for a luxury car is filled with high expectations. Undoubtedly, that has a lot to do with the vehicles you are considering, but at Motors, we think you should also have pretty high expectations for your dealership.
<br></br>
 — MIKEY DIOKLES, President of Motors</p>
    </Col>
  </Row>
  
</Container>

        </div>
    );
};

export default About;
import React from 'react';
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import './Gallary.css';
const Gallary = () => {
    return (
        <div className='bg-dark text-white gallary'>
          <Container>
  <Row>

  <Carousel>
  
  <Carousel.Item>

  <Container>
  <Row className='mb-4'>
    <Col sm={12} md={12} lg={12} className=''>
    <img src='https://motors.stylemixthemes.com/wp-content/uploads/2015/10/about-us-2-270x180.jpg' className='img-fluid me-5 mx-5'></img>
    <img src='https://motors.stylemixthemes.com/wp-content/uploads/2015/09/parallax-block-2-270x180.jpg' className='img-fluid me-5'></img>
    <img src='https://motors.stylemixthemes.com/wp-content/uploads/2015/09/parallax-block-270x180.jpg' className='img-fluid'></img>
    
   
    
    </Col>
    
  </Row>
  <Row>
    <Col sm={12} md={12} lg={12} className=''>
    <img src='https://motors.stylemixthemes.com/wp-content/uploads/2015/10/slide-2-270x180.jpg' className='img-fluid me-5 mx-5'></img>
    <img src='https://motors.stylemixthemes.com/wp-content/uploads/2015/10/6-275x205.jpg' className='img-fluid me-5'></img>
    <img src='https://motors.stylemixthemes.com/wp-content/uploads/2015/11/Nissan-Altima_2-275x205.jpg' className='img-fluid'></img>
    
   
    
    </Col>
    
  </Row>
 
</Container>    
  </Carousel.Item>
  <Carousel.Item>

  <Container>
  <Row className='mb-4'>
    <Col sm={12} md={12} lg={12} className=''>
    <img src='https://motors.stylemixthemes.com/wp-content/uploads/2015/10/slide-2-270x180.jpg' className='img-fluid me-5 mx-5'></img>
    <img src='https://motors.stylemixthemes.com/wp-content/uploads/2015/10/6-275x205.jpg' className='img-fluid me-5'></img>
    <img src='https://motors.stylemixthemes.com/wp-content/uploads/2015/11/Nissan-Altima_2-275x205.jpg' className='img-fluid'></img>
    
   
    
    </Col>
    
  </Row>
  <Row>
    <Col sm={12} md={12} lg={12} className=''>
    <img src='https://motors.stylemixthemes.com/wp-content/uploads/2015/09/parallax-block-2-270x180.jpg' className='img-fluid me-5 mx-5'></img>
    <img src='https://motors.stylemixthemes.com/wp-content/uploads/2015/09/parallax-block-2-270x180.jpg' className='img-fluid me-5'></img>
    <img src='https://motors.stylemixthemes.com/wp-content/uploads/2015/09/parallax-block-2-270x180.jpg' className='img-fluid'></img>
    
   
    
    </Col>
    
  </Row>
 
</Container>    
  </Carousel.Item>
 
</Carousel>


   
  </Row>
  
</Container>

        </div>
    );
};

export default Gallary;
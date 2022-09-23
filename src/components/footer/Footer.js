import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer-container mb-0">
      
        <Row className="footer-body p-5 g-5 mx-auto" xs={1} md={3}  >
      
          
            <Col className="footer-item ">
                <h3>Contact info</h3>
                <h5>Contact</h5>
                <p>Phone: 03 4245 2030</p>
                <p>Fax: 03 4245 2035</p>
                <br />
               
            </Col>
            <Col className="footer-item">
                <h3>Our Address</h3>
                <p>Motors
                    <br />
                    60 Feet,Monipur School
                    <br />
                Mirpur 2 no
                    <br />
                    Dhaka,Bangladesh</p>
            </Col>
            <Col className="footer-item">
            <h3>Opening Hours</h3>
                <p>
                    Mon Tue Wed Fri 8:30AM-9PM </p>
                <p>Thurs 8:30 AM-7:00 PM</p>
                <p> Sat: 8:30 AM-09:30 PM</p>
            </Col>
            
        </Row>
      
          <div className="text-center">
          <button className="fs-4"><i className="fab fa-facebook"></i></button>
            <button className="fs-4 mx-1"><i className="fab fa-instagram"></i></button>
            <button className="fs-4"> <i className="fab fa-twitter-square"></i></button>
            <button className="fs-4 ms-1">  <i className="fab fa-google-plus-g"></i></button>
          </div>
        <p className="text-center mt-5 py-3 fs-5 mb-0 border-top">Copyright &copy; Motors ,2021</p>
    </div>
    );
};

export default Footer;
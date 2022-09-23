import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import  './Banner.css';
const Banner = () => {
    return (
        <div>
            <Carousel style={{ backgroundColor: "rgb(8, 25, 82)",height:"500px" }} className="py-5 banner-style">
                <Carousel.Item interval={1000}>
                    <Row xs={1} md={2}>
                        <Col className="d-flex justify-content-center align-items-center ">
                            <div className="text-white">
                                <h3>Power and Beauty</h3>
                                <p>Free Library’s $1M auto archives are moving to Philly’s <br /> world-famous car museum and to a Hershey attraction.</p>
                             
                            </div>
                        </Col>
                        <Col>
                            <img
                                className="d-block w-100"
                                src='https://auto-mart-d4a30.web.app/static/media/redCar.b2f81a2c.png'
                                alt="First slide"
                            />
                           
                        </Col>
                       
                    </Row>

                </Carousel.Item>
                <Carousel.Item interval={500}>
                <Row  xs={1} md={2}>
                        <Col className="d-flex justify-content-center align-items-center">
                            <div className="text-white">
                            <h3>Power and Beauty</h3>
                                <p>Free Library’s $1M auto archives are moving to Philly’s <br /> world-famous car museum and to a Hershey attraction.</p>
                            </div>
                        </Col>
                        <Col>
                            <img
                                className="d-block w-100"
                                src="https://i.pinimg.com/originals/21/6f/1c/216f1c3378c57470b836b116b5bdfb9d.png"
                                alt="First slide"
                            />
                        </Col>

                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                <Row  xs={1} md={2}>
                        <Col className="d-flex justify-content-center align-items-center">
                            <div className="text-white">
                            <h3>Power and Beauty</h3>
                                <p>Free Library’s $1M auto archives are moving to Philly’s <br /> world-famous car museum and to a Hershey attraction.</p>
                            </div>
                        </Col>
                        <Col>
                            <img
                                className="d-block w-100"
                                src='https://auto-mart-d4a30.web.app/static/media/yellowCar.3c110ffd.png'
                                alt="First slide"
                            />
                        </Col>

                    </Row>
                </Carousel.Item>
            </Carousel>
            <div>
                <div >
                    <div className="card-group container service-style">

                        <div className="card p-5 buy">

                            <i className="fas fa-car-alt icon "></i>
                           
                            <div className="card-body">
                                <h3 className="card-title">Buy and Sale Vehiclese</h3>
                                <p className="card-text">We buy and sale barand new car and also used car of any brand</p>
                            </div>


                            
                        </div>
                        <div className="card rental p-5 ">
                            <i className="fas fa-bus-alt icon"></i>
                            <div className="card-body">
                                <h3 className="card-title">Vehicles Rental Service</h3>
                                <p className="card-text">We buy and sale barand new car and also used car of any brand</p>
                               
                            </div>
                          
                        </div>
                        <div className="card service p-5">
                            <i className="fas fa-truck icon"></i>
                            <div className="card-body">
                                <h3 className="card-title">Vehicles Servicing</h3>
                                <p className="card-text">We buy and sale barand new car and also used car of any brand</p>
                             
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;
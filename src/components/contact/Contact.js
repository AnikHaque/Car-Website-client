import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="container">
             <div className="row  my-5 pt-5">
                <div className="col mx-auto mt-5 pt-5 ">
                    <h1 className="text-center">Send us a Message</h1>
                    <div className="mx-auto w-50">
                        <Form.Group className="mb-3 mx-auto " controlId="formGroupPassword">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <FloatingLabel controlId="floatingTextarea2" label="Massage">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <button className="btn-regular my-2 mb-5 w-100 mt-3"  type="submit">
                    Submit
                </button>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Contact;
import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import CheckoutForm from '../CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe('pk_test_51KrL8sH9U1rucFvVxdtUNWHMaDPPIT6mfxHqfV3OQ6U0yofozFclZc1gmS3VbwMGTwBluXRI3biFxPikM7eJ7dU0004eYdGiJq');
const Pay = () => {
    const {paymentId} = useParams();
    const [appointment,setAppointment] = useState({})
     useEffect(()=>{
         fetch(`https://pacific-chamber-54725.herokuapp.com/cars/${paymentId}`)
       .then(res=>res.json())
        .then(data=>setAppointment(data))

     },[paymentId])
    return (
        <div>
            <h1>Please pay for : {appointment.name} </h1>
            <p>Pay : $ {appointment.price}</p>
    {
        appointment.price && <Elements stripe={stripePromise}>
        <CheckoutForm
        appointment={appointment}
        />
        </Elements>
    }
        </div>
    );
};

export default Pay;
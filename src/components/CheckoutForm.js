import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAuth from '../hooks/useAuth';

const CheckoutForm = ({appointment}) => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret,setClientSecret] = useState('');
    const {price,name, _id} = appointment;
    const stripe = useStripe();
    const elements = useElements();
const {user} = useAuth();
useEffect(()=>{
fetch('https://pacific-chamber-54725.herokuapp.com/create-payment-intent',{
  method:'POST',
  headers: {
    'content-type':'application/json'
  },
  body: JSON.stringify({price})
})
.then(res=>res.json())
.then(data=>setClientSecret(data.clientSecret))
},[price]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
          }
          const card = elements.getElement(CardElement);
          if (card == null) {
            return;
          }
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
          if (error) {
            console.log('[error]', error);
            setError(error.message);
          } else {
              setError('');
            console.log('[PaymentMethod]', paymentMethod);
          }     
// payment intent 
const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
 clientSecret,
  {
    payment_method: {
      card: card,
      billing_details: {
        name: name,
        email: user.email
        
      },
    },
  },
);
if(intentError){
  setError(intentError.message);
  setSuccess('');
}
else{
  setSuccess('Your payment processed successfully');
  setError('');
  console.log(paymentIntent);
// save to database 
const payment = {
amount: paymentIntent.amount,
transaction:paymentIntent.client_secret,
created:paymentIntent.created,
last4:paymentMethod.card.last4

}
const url = `https://pacific-chamber-54725.herokuapp.com/cars/${_id}`;
fetch(url, {
  method: 'PUT',
  headers: {
    'content-type': 'application/json'
  },
  body:JSON.stringify(payment)
})
.then(res=>res.json())
.then(data=>console.log(data))
}    
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay ${price}
      </button>
    </form>
    {
        error && <p className='text-danger'>{error}</p>
    }
    {
        success && <p className='text-success'>{success}</p>
    }
        </div>
    );
};

export default CheckoutForm;
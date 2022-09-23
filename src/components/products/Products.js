import React, { useEffect, useState } from 'react';

import IndividualProduct from '../individualproduct/IndividualProduct';
import './Products.css';

const Products = () => {
    const [food, setFood] = useState([])
    useEffect(()=>{
fetch('https://pacific-chamber-54725.herokuapp.com/cars')
.then(res => res.json())
.then(data => setFood(data))
    },[])


    return (
        <div className='mt-5 mb-5'>
             <h1 className='text-center fw-bold mb-5'>OUR Cars Collections</h1>
            <div className="service-container">
                <div className="container">
            <div class="row row-cols-1 row-cols-lg-3 g-4">
                {
                    food.map(foods => <IndividualProduct
                        key={foods._id}
                        foods={foods}
                    ></IndividualProduct>)
                }
                </div>
                </div>
            </div>  
  </div>
    )}     


export default Products;
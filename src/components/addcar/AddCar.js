import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddCar.css';

const AddCar = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://pacific-chamber-54725.herokuapp.com/cars',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Added Successfully');
               reset();
           }
        })
    };
    return (
        <div className='add-course container'>
            <h1 className='text-center fw-bold  mt-5 text-dark'>Please Add a Car !!!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name",)} placeholder="Car Name" />
      <input {...register("description",)} placeholder="Car Description"/>
      <input type="number" {...register("price", )} placeholder="Car Price"/>
      <input type="number" {...register("rating", )} placeholder="Car Km/h"/>
      <input {...register("img",)} placeholder="Car Image"/>
      <input type="submit" />
    </form> 
        </div>
    );
};

export default AddCar;
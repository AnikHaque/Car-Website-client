import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddSpecial.css';

const AddSpecial = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://pacific-chamber-54725.herokuapp.com/special',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Added Successfully');
               reset();
           }
        })
    };
    return (
        <div className='add-course container'>
            <h1 className='text-center fw-bold  mt-5 text-dark'>Please Add a Special !!!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name",)} placeholder="Car Name" />
      <input {...register("description",)} placeholder="Car Description"/>
      <input {...register("price",)} placeholder="Car Price"/>
      <input type="number" {...register("speed", )} placeholder="Car speed"/>
      <input  {...register("type", )} placeholder="Car type"/>
      <input {...register("img",)} placeholder="Car Image"/>
      <input type="submit" />
    </form> 
        </div>
    );
};

export default AddSpecial;
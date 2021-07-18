import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import './Shipment.css'
const Shipment = () => {
 
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{
    addToDatabaseCart(data);
    console.log(data);
  };
  const [loggedInUser] = useContext(UserContext);
  
  console.log(watch("example"));

  return (
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>

      <input defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="Your Name"/>
      {errors.name && <span className="error">Name is required</span>}
      <input defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Email Address"/>
      {errors.email && <span className="error">Email Address is required</span>}
      <input {...register("address", { required: true })} placeholder="Street Address"/>
      {errors.address && <span className="error">Street Address is required</span>}
      <input {...register("phone", { required: true })} placeholder="Phone Number"/>
      {errors.phone && <span className="error">Phone Number is required</span>}

      <input type="submit" />
    </form>
  );
};

export default Shipment;
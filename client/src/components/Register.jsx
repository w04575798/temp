import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Register = () => {
  const { register, handleSubmit } = useForm();

  const registerUser = userData => {
    console.log(userData);

    axios.post("http://localhost:3000/api/users/register", userData)
      .then(response => {
        console.log(response);
        const authToken = response.headers['x-auth-token'];
        localStorage.setItem('token', authToken);

        // Redirect the user to the Main page
        window.location.href = '/';
      })
      .catch(error => {
        console.error(error);
        // Handle registration error, e.g., display an error message to the user
      });
  };

  return (
    <form onSubmit={handleSubmit(registerUser)} className="form-signin">
      <h1 className="h3 mb-3 font-weight-normal text-center">Register</h1>
      <label htmlFor="inputFirstName" className="sr-only">First Name</label>
      <input {...register('firstName')} id="inputFirstName" className="form-control" placeholder="First Name" required />
      
      <label htmlFor="inputLastName" className="sr-only">Last Name</label>
      <input {...register('lastName')} id="inputLastName" className="form-control" placeholder="Last Name" required />

      <label htmlFor="inputEmail" className="sr-only">Email address</label>
      <input {...register('email')} id="inputEmail" className="form-control" placeholder="Email address" required />
      
      <label htmlFor="inputPassword" className="sr-only">Password</label>
      <input {...register('password')} type="password" id="inputPassword" className="form-control" placeholder="Password" required />

      <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
    </form>
  );
};

export default Register;

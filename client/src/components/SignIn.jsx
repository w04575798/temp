import React from 'react';
import '../css/signin.css';
import {useForm} from 'react-hook-form';
import axios from 'axios';

const SignIn = props => {

    const { register, handleSubmit} = useForm();
    const sendCredentials = credentials => { 
        console.log(credentials)
        
        axios.post(`${import.meta.env.VITE_API_URL}/users/login`, credentials)
        .then(response => { 
            console.log(response);
            console.log(response.headers['x-auth-token'])
            localStorage.setItem('token', response.headers['x-auth-token'])
            // Redirect the user to Main page
        window.location.href = '/';
        }).catch(error => {
            console.error(error);
          });
    
    }
    return ( 
        <form onSubmit={handleSubmit(sendCredentials)} className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input {...register('email')}  id="inputEmail" className="form-control" placeholder="Email address" required />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input {...register('password')} type="password" id="inputPassword" className="form-control" placeholder="Password" required />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
     );
}
 
export default SignIn;
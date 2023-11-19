import React from 'react'
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    axios.defaults.withCredentials=true
    const navigate = useNavigate();
    localStorage.setItem('email', JSON.stringify(email));
    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:5002/auth/login', {  email, password })
          .then((result) => {
            console.log(result.data);
            if(result.data.message==='ok'){
              if(result.data.role==='admin'){
                navigate('/dashboard')
              }
              else{
                navigate('/userUi')
              }
            }
            else{
              navigate('/userUi')
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    
  return (
    <div className="container mt-5">
    <h2 className="text-center">Login</h2>
    <form onSubmit={handleSubmit} >
      
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Enter email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Enter password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
    
    <div>
    <h3>  Have not already an account?</h3>
     <Link to='/register' className="btn btn-primary">Register</Link>
    </div>
    <ToastContainer/>
  </div>
  )
}

export default Login

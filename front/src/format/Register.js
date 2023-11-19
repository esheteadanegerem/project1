import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials=true
    if(formData.password!==formData.confirmPassword){
      toast.error('password mismach occure')
    }
    if(formData.length<6){
      toast.error('password length must greater than six')
    }
    if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!.])[A-Za-z\d@#$%^&*!.]{8,}/.test(formData.password)) {
      toast.error('Password must contain at least one uppercase, one lowercase, one special character, and one number');
    }
  

     if (formData.password === formData.confirmPassword && formData.password.length >= 8 && /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!.])[A-Za-z\d@#$%^&*!.]{8,}/.test(formData.password)){
      axios.post('http://localhost:5002/auth/register', formData)
      .then((response) => {
        console.log(response.data); 
        if(response.data==='userExist'){
          toast.error('user alread exist please login')
          setTimeout(() => {
            navigate('/login')
          }, 6000);
        }
        if(response.data==='registered'){
          toast.success('user registered successfully ')
          setTimeout(() => {
            navigate('/upload')
          }, 3000);
        }
       else{
        toast.error('please try again there is some problem')
        setTimeout(() => {
          navigate('/')
        }, 4000);
       }
      })
      .catch((error) => {
        console.error(error); 
      });
    }
  
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label> Full Name(ሙሉ ስሞ)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address( ኢሜል )</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formphone">
          <Form.Label>Phone Number (ስልክ ቁትር አስገባ)</Form.Label>
          <Form.Control
            type="tel"
            placeholder="+251910122345"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password(የይለፍ ቃል)</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password(የይለፍ ቃል አረጋግጥ)</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </Form.Group>


        <Button variant="primary" type="submit" className="mt-3">
          Register
        </Button>
      </Form>
      <ToastContainer/>
    </div>
  );
};

export default Register;

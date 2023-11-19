import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const UseResponse = () => {
  const [respond, setRespond] = useState("");
const navigate=useNavigate();
 

  function handleSubmit(e) {
    e.preventDefault();
    const storedEmail = localStorage.getItem('email');
    const parsedEmail = JSON.parse(storedEmail);
  
    axios.post('http://localhost:5002/auth/respond', { response: respond,email:parsedEmail })
      .then(response => {
       toast.success('you set your price come back after six hours if experts agree with your price')
       setTimeout(() => {
        navigate('/')
       }, 6000);
        
      })
      .catch(error => {
        console.log('An error occurred during posting the response: ', error);
      });
  }

  return (
    <div>
      <div className="card justify-content-center align-items-center p-4 m-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="response">
              Write your Response here.<br />
              If you agree with the price, you can expect the result based on the time period.
              Check the progress via email or telegram. If you disagree, please check the website after six hours.
            </label>
            <textarea
              className="form-control"
              id="response"
              value={respond}
              onChange={(e) => { setRespond(e.target.value) }}
              placeholder="I agree with your price and I expect the result soon. If you disagree, please do not work on the assignment."
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default UseResponse;

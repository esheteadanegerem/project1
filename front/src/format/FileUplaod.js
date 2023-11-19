import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/fileupload.css'
import imag4 from '../images/imag3.jpeg'
const FileUpload = () => {
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
const navigate=useNavigate();
  const uploadFiles = async (fileList) => {
    const formData = new FormData();

    for (let index = 0; index < fileList.length; index++) {
      formData.append("file", fileList[index]);
    }

    try {
      const response = await axios.put("http://localhost:5002/updat/update", formData);
      console.log(response.data); 
      toast.success('you successfully submited the file come back after 6 hours')
      setTimeout(() => {
        navigate('/')
      }, 6000);
    } catch (error) {
      setError(error);
      console.error("An error occurred:", error);
    }
  };
  return (
    <div id='cont'>
       
    <div id='container' className='    card '>
        <h3 id='h'>upload your assignment or project here</h3>
        <img id='image' src={imag4}></img>
        <input 
          type="file"
          className="form-control"
          id="file"
          name="file"
          multiple
          onChange={(e) => {
            const fileList = e.target.files;
  
            uploadFiles(fileList);
          }}
          required
        />
      </div>
<ToastContainer/>
    </div>
  );
};

export default FileUpload;

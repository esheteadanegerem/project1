import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminTask = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5002/fetchdata/fetch")
      .then((response) => {
        console.log(response.data)
        setFiles(response.data);
      })
      .catch((error) => {
        console.error("An error occurred during data fetch:", error);
      });
  }, []);

  // Function to get the file name from the file path
  const getFileNameFromPath = (filePath) => {
    const parts = filePath.split(/[\\/]/);
    return parts[parts.length - 1];
  };

  // Function to handle file download
  const handleDownload = (filename) => {
    const fileUrl = `http://localhost:5002/fetchdata/download/${encodeURIComponent(filename)}`;
    axios({
      url: fileUrl,
      method: 'GET',
      responseType: 'blob',
    })
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
      })
      .catch(error => {
        console.error('Error downloading file:', error);
      });
  };
  
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            Assignments and Projects - Prices Inquiry
          </h5>
          {files.length > 0 ? (
            files.map((file) => (
              <div className="card mb-3" key={file._id}>
                <div className="card-body">
                  <p className="card-text">Name of the user: {file.name}</p>
                  <p className="card-text">Email of the user: {file.email}</p>
                  <p className="card-text">
                    File sent date: {file.createdAt.split("T")[0]}
                  </p>
                  <p className="card-text">Phone of user: {file.phone}</p>
                  <Link
                    to="#"
                    onClick={() => handleDownload(file.filepath, getFileNameFromPath(file.filepath))}
                    className="btn btn-secondary my-2"
                  >
                    Download file 
                  </Link> <br/>
                  <Link
                    to={`/respond?email=${file.email}`}
                    className="btn btn-primary"
                  >
                   Give Respond
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminTask;

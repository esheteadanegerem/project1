import React from "react";
import AdminTask from "./AdminTask";
import { Link } from "react-router-dom";
import axios from "axios";
import FileUpload from "../format/FileUplaod";
const Dashboard = () => {
  return (
    <div>
      well come to Dashboard admin
      <div className="row">
        <div className="col card">
          <Link to='/adminTask' className="btn btn-secondary">See New Assignments</Link><br/>
          <Link to='/upload' className="btn btn-primary">Send the files to user</Link>
        </div>
        <div className="col ">

        </div>
      </div>
    </div>
  );
};

export default Dashboard;

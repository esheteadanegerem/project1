import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "../format/Home";
import AdminTask from "./AdminTask";
import Responds from "./Responds";
import Dashboard from "./Dashboard";
import FileUpload from "../format/FileUplaod";
const Protected = () => {
  const [rol, setRol] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5002/protected/protect")
      .then((result) => {
        setRol(result.data);
      })
      .catch((error) => {
        console.log(error + "error during role setting");
      });
  }, []);

  let isAuth = false;

  if (rol==='admin') {
    isAuth = true;
  }
  return (
    <>
      {isAuth ? (
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/respond" element={<Responds />} />
          <Route path="/adminTask" element={<AdminTask />}></Route>
          <Route path="/upload" element={<FileUpload />}></Route>
        </Routes>
      ) : (
        <Home />
      )}
    </>
  );
};

export default Protected;
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "../format/Home";
import UseResponse from "./UseResponse";
import UserUi from "./UserUi";
import Responds from "../admin/Responds";
const Protectuser = () => {
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

  if (rol === "user") {
    isAuth = true;
  }
  return (
    <>
      {isAuth ? (
        <Routes>
          <Route path="/userui" element={<UserUi />} />
          <Route path="/responging" element={<UseResponse />} />
          <Route path="/respond" element={<Responds />} />

        </Routes>
      ) : (
        <Home />
      )}
    </>
  );
};

export default Protectuser;

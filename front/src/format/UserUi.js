import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/userUi.css";
const UserUi = () => {
  const [price, SetPrice] = useState("");
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:5002/auth/getprice")
      .then((response) => {
        SetPrice(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div
        id="contaner"
        className=" row justify-content-center m-5">
        <div className="col">
          <h4>The Price set by the exeperts is:</h4>
          <h5>{price}birr</h5>
          <div id="inner">
            <Link id="inner" to="/responging" className="btn  btn-primary">
              give response
            </Link>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default UserUi;

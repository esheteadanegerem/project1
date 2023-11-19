import React from "react";
import Nabar from "./Nabar";
import { Navbar } from "react-bootstrap";
import Footers from "./Footers";
import imag3 from "../images/imag1.jpeg";
import "./css/home.css";
const Home = () => {
  return (
    <div>
      <Navbar.Brand
        href=""
        className="ml-auto justify-content-end"
      ></Navbar.Brand>

      <Nabar />
     <div className="container m-5">
     <div className="container">
        <h2 className="justify-content-center txt-danger">
          Help By Doing Assignment
        </h2>
        <p>
          This websight is desingded to connect some with anywhere who want to
          his/her Assignment will be done.
          <br />
          The projects and the Assignment will be at any level of eduction from
          elementary to master including final your projects in any field of
          study.We have highly qualified experts with more than six year of
          experiance in health,social,and natural studies
        </p>
      </div>

      <div className="container">
  <div className="row">
    <div className="col-md-4">
      <img id="image" className="m-3 img-fluid" src={imag3} alt="Your Image" />
    </div>
    <div className="col-md-8">
      <h3>Unlock Academic Success with Expert Assistance!</h3>
      <p>
        <h4>Introduction:</h4>
        Welcome to Help by doing the assignment, where academic excellence meets expert guidance. We connect students with skilled professionals to ensure your assignments and projects shine bright.
        <h4>Key Features:</h4>
        <ul>
          <li>Access to Experts: Tap into a pool of experienced professionals ready to assist you in various subjects and projects.</li>
          <li>Tailored Solutions: Get personalized help for your assignments, ensuring they meet the highest standards of quality.</li>
          <li>On-Time Delivery: Say goodbye to tight deadlines. Our experts deliver on time, every time.</li>
        </ul>
      </p>
    </div>
  </div>

  <div className="row">
    <div className="col-md">
      <h4>Why Choose Us</h4>
      <h5>Quality Assurance:</h5>Our experts are dedicated to delivering top-notch assignments, guaranteeing your satisfaction.
      <h5>Affordable Rates:</h5>Enjoy quality assistance without breaking the bank. We believe in making academic support accessible to everyone.

      <h4>How It Works:</h4>
      <h6>Submit Assignment:</h6>Share your assignment details and requirements.
      <h6>Connect with Experts:</h6>Choose from a pool of experts based on their expertise.
      <h6>Receive Quality Work:</h6>Get your assignment completed by a professional, ready for submission.
    </div>
    <div className="col-md">
      <h4>User Benefits:</h4>
      <h6>Save Time:</h6>Focus on what matters most to you while experts take care of your assignments.
      <h6>Learn and Grow:</h6>Gain insights from professionals in your field, enhancing your understanding of the subject matter.

      <h4>Customer Testimonials:</h4>
      <p>Don't just take our word for it! Hear from students who have experienced success with our platform.</p>
    </div>
  </div>
</div>

      <div className="m-5">
        <h3>Remember these rule when you want to your Assignment be done!</h3>
        <li>Make sure your are register the site</li>
        <li>Estimate the price for your Assignment</li>
        <li>
          You should see your email or telegram account with three hours after
          submit your projects
        </li>
        <li>You can nogatate with the staff workrs</li>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-center",
          marginRight: "3px",
        }}
      >
        <a id="a" href="/register" className="btn btn-success">
          Register Here to send your project
        </a>
      </div>
      <Footers />
     </div>
    </div>
  );
};

export default Home;

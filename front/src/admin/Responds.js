import React from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Responds = () => {
  const navigate=useNavigate();
  const [price, SetPrice] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");
  // localStorage.setItem('email', JSON.stringify(email));


  // ... other imports and code
  
  function handleSubmit(e) {
    e.preventDefault();
  
    axios
      .post("http://localhost:5002/auth/price", { email, price })
      .then((response) => {
        toast.success('You set the price. Please wait for user response');
  
        // Delay navigation to the home page by 6 seconds (6000 milliseconds)
        setTimeout(() => {
          navigate('/');
        }, 6000);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  return (
    <div>
      <div className="container m-5 card justify-content-center align-items-center">
        <h3>decide the price of the assignment or project</h3>
        <form onSubmit={handleSubmit}>
          <label>Enter the price of the assignment or the projects</label><br/>
          <input
            type="text"
            value={price}
            id="price"
            onChange={(e) => {
              SetPrice(e.target.value);
            }}
          ></input>
          <button className="btn btn-primary " type="submit">
            send
          </button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Responds;

//   return (
//     <div>
//       <div className="container m-5 card justify-content-center align-items-center">
//         <form onSubmit={handleSubmit}>
//           <label>Enter the price of the assignment or the projects</label>
//           <input
//             type="text"
//             value={price}
//             id="price"
//             onChange={(e) => {
//               SetPrice(e.target.value);
//             }}
//           ></input>
//           <button className="btn btn-primary " type="submit">send</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Responds;

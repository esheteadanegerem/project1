import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./format/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./admin/Dashboard";
import AdminTask from "./admin/AdminTask";
import Register from "./format/Register";
import FileUpload from "./format/FileUplaod";
import Login from "./format/Login";
import Responds from "./admin/Responds";
import UserUi from "./format/UserUi";
import About from "./information/About";
import Services from "./information/Services";
import UseResponse from "./format/UseResponse";
import Protected from "./admin/Protected";
import Protectuser from "./format/Protectuser"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        <Route element={<Protected />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/respond" element={<Responds />} />
          <Route path="/adminTask" element={<AdminTask />}></Route>
         
        </Route>

        
       <Route element={<Protectuser/>}>
       <Route path="/userui" element={<UserUi />} />
        <Route path="/responging" element={<UseResponse />} />
       

       </Route>

        <Route path="/register" element={<Register />} />
      
       
        <Route path="/upload" element={<FileUpload />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        
        
      </Routes>
    </Router>
  );
}

export default App;

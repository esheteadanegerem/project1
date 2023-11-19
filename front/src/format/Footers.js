import React from 'react'
import { FaFacebook, FaLinkedin, FaTelegram } from 'react-icons/fa';
import './css/footer.css'
const Footers = () => {
  return (
    <footer id='footer' className="bg-dark text-light py-4 " style={{ backgroundColor: '#052629', color: 'white' }}>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h5>Contact Us</h5>
          <p>Email: adaneeshete560@gmail.com</p>
          <p>Phone: +251961269515</p>
        </div>
        <div className="col-md-6">
          <h5>Follow Us</h5>
          <div>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} style={{ margin: '0 10px', color: '#3b5998' }} />
      </a>
      <a href="https://www.linkedin.com/in/adane318" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} style={{ margin: '0 10px', color: '#0077B5' }} />
      </a>
      <a href="https://t.me/Eshetegerem" target="_blank" rel="noopener noreferrer">
        <FaTelegram size={30} style={{ margin: '0 10px', color: '#0088cc' }} />
      </a>
    </div>
          <p>Connect with us on social media for updates.</p>
        </div>
      </div>
      <hr className="my-4" />
      <div className="row">
        <div className="col-12 text-center">
          <p>&copy; 2023 Your Assignment Service. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footers

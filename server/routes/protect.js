const express=require('express')
const UserModel =require('../models/users.js')
const jwt=require('jsonwebtoken')
const protectRoute=express.Router();
const path=require('path')
const dotenv = require('dotenv');
const envPath = path.join(__dirname,  '.env');
dotenv.config({ path: envPath });

const SECRET_KEY =process.env.SECRET_KEY;
const verifyToken = async (req, res, next) => {
    const token = req.cookies.token;
    // console.log(token)
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    try {
      const decoded = await jwt.verify(token, SECRET_KEY);
  
      if (!decoded || !decoded.user ) {
        return res.status(401).json({ message: 'Invalid token structure' });
      }
  
      req.user =await decoded.user;
    
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Invalid token' });
    }
  };
protectRoute.get('/protect',verifyToken,async(req,res)=>{
    
  //  console.log(req.user.role)
   res.json(req.user.role)
  
})
module.exports=protectRoute;
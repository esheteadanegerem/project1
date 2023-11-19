const express = require('express');
const jwt = require('jsonwebtoken'); 
const priceRoute = express.Router();
const UserModel = require('../models/users.js');
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

    if (!decoded || !decoded.user || !decoded.user.price) {
      return res.status(401).json({ message: 'Invalid token structure' });
    }

    req.user =await decoded.user;
  
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

priceRoute.get('/getprice', verifyToken, (req, res) => {
  res.json(req.user.price);
});


priceRoute.post('/price', async (req, res) => {
  const { email, price } = req.body;

  try {
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      res.json(`Sorry, user with ${email} does not exist. Please login.`);
    } else {
      const id = user._id;
    

      
      user.price = price;
      await user.save();

      res.json({ message: user });
    }
  } catch (error) {
    res.json('Something went wrong with this code');
  }
});
priceRoute.post('/respond', async (req, res) => {
  const { response, email } = req.body;
  try {
      const user = await UserModel.findOne({ email: email });
      console.log(response);


      if (user) {
          user.agreement = response;
          await user.save();
          res.status(200).send('Agreement updated successfully');
      } else {
        
          res.status(404).send('User not found');
      }
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});

module.exports = priceRoute;

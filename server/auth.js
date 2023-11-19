const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authRoute = express.Router();
const UserModel = require("./models/users.js");
require('dotenv').config();

const SECRET_KEY =process.env.SECRET_KEY;
authRoute.post("/register", async (req, res) => {
  const { name, password, email, phone } = req.body;
  try {
    user = await UserModel.findOne({ email: email }); 

    if (user) {
      return res.json("userExist");
    }

    const hash = await bcrypt.hash(password, 12);
    const newUser = await UserModel.create({
      name,
      password: hash,
      email,
      phone,
      
    });

    const token = jwt.sign({ user: newUser }, SECRET_KEY, { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true });

    res.json( "registered" );
  } catch (error) {
    res.status(500).json({ error: "Error during registration: " + error });
  }
});

authRoute.post('/login', (req, res) => {
  const { email, password } = req.body;

  UserModel.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      bcrypt.compare(password, user.password, (error, response) => {
        if (response) {
          const token = jwt.sign(
            { user:user },
            SECRET_KEY,
            { expiresIn: '1d' }
          );
          res.cookie('token', token, { httpOnly: true }); 
         
          return res.json({ message: 'ok', token,role:user.role,price:user.price });
        } else {
          return res.status(401).json({ error: 'Incorrect password' });
        }
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    });
});
module.exports = authRoute;

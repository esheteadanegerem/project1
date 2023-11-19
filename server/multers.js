const multer = require('multer');
const express = require('express');
const updateUserRoute = express.Router();
const jwt = require('jsonwebtoken');
const path = require('path');
const UserModel=require('./models/users.js')
require('dotenv').config();

const SECRET_KEY =process.env.SECRET_KEY;
let user = '';

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Missing token' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        user = decoded.user;
        console.log(user);
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'uploads'));
    },
    filename: (req, file, cb) => {
        const fileName = user && user._id ? user._id + '-' + file.originalname : file.originalname;
    cb(null, fileName);
    }
});

const upload = multer({ storage: storage });

updateUserRoute.put('/update', verifyToken, upload.array('file'),async (req, res) => {
  const file=req.files
  const data={name:user.name,email:user.email,password:user.password,phone:user.phone,_id:user._id,filepath:file[0].path}
  const updatedUser = await UserModel.findByIdAndUpdate(user._id, data, { new: true });
        res.json(updatedUser);
});

module.exports = updateUserRoute;

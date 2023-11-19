const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const cookieParser=require('cookie-parser')
const app = express();

const authRoute = require('./auth.js');
const updateUserRoute=require('./multers.js')
const fetchData=require('./routes/fetchUserData.js')
const setPrice=require('./routes/setprice.js')
const protectRoute=require('./routes/protect.js')
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true,
   
}));
app.use(cookieParser());
app.use(express.json()); 

//routes
app.use('/auth', authRoute);
app.use('/protected',protectRoute)
app.use('/updat',updateUserRoute)
app.use('/fetchdata',fetchData)
app.use('/auth',setPrice)
const URL=process.env.URL
const PORT=process.env.PORT

mongoose.connect(URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1); 
  });


app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

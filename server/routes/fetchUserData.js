const expres=require('express')
const path=require('path')
const UserModel=require('../models/users.js')
const fetchData=expres.Router()
fetchData.get('/fetch',async(req,res)=>{
    try {
       
        const twoDaysAgo = new Date();
        twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
    
      
        const data = await UserModel.find({ createdAt: { $gte: twoDaysAgo }}).select('-role -password -__v');
        //  console.log(data)

        res.json(data);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
    
})
fetchData.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  res.sendFile(filename);
});

module.exports=fetchData
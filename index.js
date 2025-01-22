const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./db.js')


app.use(express.json())
app.use(express.urlencoded({extended:true}))
connectDB();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("Hiiii")
})
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes.js')
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);

app.listen(PORT, (req,res) => {
    console.log("Listening to PORT 3000");
})
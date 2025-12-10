require("dotenv").config()
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const connectDB = require('./config/db')



const app = express ();

//connect DB
connectDB();


app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Mern Backend Project")
});




app.get("/test-db", async (req, res) => {
  try {
    const dbStatus = mongoose.connection.readyState; 
    res.json({
      message: "DB test successful",
      status: dbStatus === 1 ? "Connected" : "Not Connected"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


const PORT = process.env.PORT || 4000 ;
app.listen(PORT , ()=> {
    console.log(`Server is running on port ${PORT}`)
});
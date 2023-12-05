import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import booksRoute from "./routes/books.js";
import cors from "cors";


const app = express()
dotenv.config()


//connection to mongoDB(credentials are in .env file)
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB");
      } catch (error) {
        throw error
      }
};

//if connected to mongodb, this line will be shown
mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected!")
})

// if disconnected from mongodb, this line will be shown
mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!")
})

//middlewares
app.use(cors())
app.use(express.json());

app.use("/api/books", booksRoute);

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message:errorMessage,
        stack: err.stack
})
})



app.listen(8800,()=>{
    connect();
    console.log("Connected to backend.")
})

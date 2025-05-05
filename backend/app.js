import express from "express"
const app = express();
import { dbConnect } from "./database/dbConnection.js";
import dotenv from "dotenv"
dotenv.config()
dbConnect();

app.listen(5000,()=>{
    console.log("server started");
    
})
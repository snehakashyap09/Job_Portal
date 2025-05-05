import mongoose from "mongoose";


export const dbConnect = async()=>{
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Mongodb connected successfully");
        
    })
    .catch((err)=>{
        console.log("Failed",err);
        
    })
}
import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please provide a title"],
        minLength: [3,"Title must contain atleast 3 characters!"],
        maxLength: [30,"Title cannot exceed 30 characters!"]
    },
    description:{
        type:String,
        required:[true,"Please provide a description!"],
        minLength: [30,"Description must contain atleast 30 characters!"],
        maxLength: [500,"Description cannot exceed 500 characters!"]
    },
    category:{
        type: String,
        required :[true,"Please provide a category"]
    },
    country:{
        type: String,
        required :[true,"Please provide a country name!"]

    },
    city:{
        type: String,
        required :[true,"Please provide a city name!"]

    },
    location:{
        type: String,
        required :[true,"Please provide a location."],
        minLength:[20,"Location must contain at least 20 characters!"]
    },
    fixedSalary:{
        type:Number,
        minLength:[4,"salary must contain atleast 4 digits"],
        maxLength:[9,"Salary cannot exceed 9 digits"]
    },
    salaryFrom:{
        type:Number,
        minLength:[4,"salary must contain atleast 4 digits"],
        maxLength:[9,"Salary cannot exceed 9 digits"]
    },
    salaryTo:{
        type:Number,
        minLength:[4,"salary must contain atleast 4 digits"],
        maxLength:[9,"Salary cannot exceed 9 digits"]
    },
    expired:{
        type:Boolean,
        default:false,
    },
    jobPostedOn:{
        type:Date,
        default:Date.now,
    },
    postedBy:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    }
})

export const Job = mongoose.model("Job",jobSchema);
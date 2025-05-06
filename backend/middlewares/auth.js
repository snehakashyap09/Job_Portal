import { catchAsyncErrors } from "./catchAsyncError.js";
import { User } from "../models/userSchema.js";
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken"

export const isAuthenticated = catchAsyncErrors(async(requestAnimationFrame,res,next)=>{
    const {token} = requestAnimationFrame.cookies;
    if(!token){
        return next(new ErrorHandler("User not Authorized",401));
    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decoded.id);
    next();
})
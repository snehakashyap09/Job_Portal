export const sendToken = (user,statusCode,res,message)=>{
    console.log("COOKIE_EXPIRE:", process.env.COOKIE_EXPIRE);

    const token  = user.getJWTToken();
    const options = {
        expires:new Date(
            Date.now() + Number(process.env.COOKIE_EXPIRE)*24*60*60*1000 || 17
        ),
        httpOnly:true,
        secure: process.env.NODE_ENV === "production",  // ensure HTTPS
  sameSite: "None", 
    }
    console.log("COOKIE_EXPIRE", process.env.COOKIE_EXPIRE)
    console.log("Date value", new Date(Date.now() + Number(process.env.COOKIE_EXPIRE) * 24 * 60 * 60 * 1000))
    
    res.status(statusCode).cookie("token",token,options).json({
        success:true,
        user,
        message,
        token
    })
}
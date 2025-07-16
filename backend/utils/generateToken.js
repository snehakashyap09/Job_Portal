import jwt from "jsonwebtoken";

export const generateToken = (res,userId)=>{
    const token = jwt.sign({
        id:userId
    },
     process.env.JWT_SECRET_KEY,
     {
        expiresIn: '7d',
     }
);

res.cookie('jwt', token,{
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 7*24*60*60*1000,
})
return token;
}
import jwt from 'jsonwebtoken';

export const verifyUser = (req,res,next)=>{
    const token = req.headers.token;
    if(!token){
        return res.status(401).json({'message':'Access Denied'});
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    } catch (error) {
        return res.status(400).json({'message':'Invalid Token'})
    }
}
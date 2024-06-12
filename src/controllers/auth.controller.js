import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Sign Up a new user
export const signUp = async(req,res)=>{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({msg:"Please enter all fields"});
    }
    try {
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({msg:"User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await User.create({
            name,
            email,
            password:hashedPassword
        });
        const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET);
        const {password:pass,...rest} = newUser._doc;
        return res.status(201).json({user:rest , token});
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

// Log In a user

export const logIn =async(req,res)=>{
    const {email,password} =req.body;
    if(!email || !password){
        return res.status(400).json({msg:"Please enter all fields"});
    }
    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({msg:"User does not exist"});
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({msg:"Invalid credentials"});
    }
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
    const{password : pass , ...rest} =user._doc;
    return res.status(200).json({user:rest,token});
}
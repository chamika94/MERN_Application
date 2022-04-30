import bcrypt from "bcryptjs";
import  Jwt  from "jsonwebtoken";

import UserModal from "../models/user.js";
const secret = "test";

export const signin = async (req, res) => {
    const {email, password }= req.body;

    try{
        const oldUser = await UserModal.findOne({email});
        if(!oldUser)
         return res.status(404).json({ message:"User doesn't exist"});
       const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
       
       if(!isPasswordCorrect)
         return res.status(400).json( {message:"Invalid credentials"});

       const token = Jwt.sign({ email: oldUser.email, id: oldUser._id }, secret,{expiresIn:"1h"});
       
       res.status(200).json({result: oldUser,token});
        
    }catch(error){
       res.status(500).json({ message: "Something went wrong"});
       console.log(error);
    }
}

export const signup = async (req, res) => {
    const {email,password, firstName, lastName} = req.body;
    try{
        const oldUser = await UserModal.findOne({email});
        if(oldUser){
            return res.status(400).json({message:"User already exists"})
        }

        const hashePassword = await bcrypt.hash(password,12);

        const result = await UserModal.create({
            email,
            password:hashePassword,
            name:`${firstName} ${lastName}`
        });

        const token = Jwt.sign({email:result.email,id: result.id},secret,{expiresIn:"1h"})
        res.status(201).json({result,token})
    }catch(error){
        res.status(500).json({message:"something went wrong"});
        console.log(error);
    }
}
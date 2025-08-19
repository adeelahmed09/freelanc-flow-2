import User from "@/models/user.models";
import ConnectDB from "@/libs/ConnectDB";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

export async function POST(req) {
    const {name,email,password,username} = await req.json()
    console.log(name,email,password,username);
    if( !name || !email || !password || !username){
        return  NextResponse.json({status:400},{message:"All fields are required"})
    } 
    try {
        await ConnectDB()
        const isUserExisted = await User.findOne({username});
        const isUserEmailExisted = await User.findOne({email});
        console.log(isUserExisted,isUserEmailExisted);
        if(isUserExisted){
            return  NextResponse.json({message:"User Name is already taken"},{status:400},)
        }
        if(isUserEmailExisted){
            return  NextResponse.json({message:"Email is already taken"},{status:400})
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            username,
            password:hashedPassword,
            email,
            name,
        })
         return  NextResponse.json({message:"Successfuly Signed Up"},{user:user},{status:200})
    } catch (error) {
        console.error("Sign Up Error :", error)
         return  NextResponse.json({message:"Something went wrong during signup."},{error:error},{status:200})
    }
    
}
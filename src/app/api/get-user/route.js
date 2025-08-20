import User from "@/models/user.models";
import ConnectDB from "@/libs/ConnectDB";
import { NextResponse } from "next/server";

export async function POST(res) {
    const {id} = await res.json()
    if(!id){
        return NextResponse.json({message:"ID is required!"},{status:400})
    }
    try {
        await ConnectDB();
        const user = await User.findById(id);
        console.log(user);
        if(!user){
            return NextResponse.json({message:"User Is not Pressent"},{status:400});
        }
        console.log("done");
        return NextResponse.json({user:user},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Something went worng during fetching User Data"},{error:error},{status:500});
    }
}
"use client"
import React, { useState } from 'react'
import { inter } from '../components/font'
import Input from '../components/sign-up/Input'
import InputPassword from '../components/sign-up/InputPassword'

function Page() {
    const [formData, setFormData] = useState({
        username:"",
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
    })

    //<---- functions ---->
    const onChangeHandler = (e)=>{
        const {name,value} = e.target
        setFormData({...formData,[name]:value})
    }
  return (
    <div className='w-full h-[83.5%] bg-[#1E1E1E] flex justify-center items-center rounded-2xl  '>
      <div className='p-5 w-[300px] flex flex-col justify-center items-center bg-[#313131] rounded-2xl custom-shadow'>
        <h1 className={`${inter.className} text-2xl font-semibold text-[#EAEAEA]`}>
            Sign Up
        </h1>
        <form action=""  className='flex flex-col gap-2'>
            <Input LableText={"Username:"} Value={formData.username} FieldName={"username"} fnc={onChangeHandler} Placeholder={"Enter Username"}/>
            <Input LableText={"Name:"} Value={formData.name} FieldName={"name"} fnc={onChangeHandler} Placeholder={"Enter Name"}/>
            <Input LableText={"Email:"} Value={formData.email} FieldName={"email"} fnc={onChangeHandler} Placeholder={"Enter Email"}/>
            <InputPassword LableText={"Password:"} Value={formData.password} FieldName={"password"} fnc={onChangeHandler} Placeholder={"Enter Password"}/>
            <div className='flex items-center justify-center mt-4'>
                <button className='px-3 py-2 font-bold text-[#EAEAEA] bg-[#8F6EFB] rounded-xl'>Sign Up</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Page

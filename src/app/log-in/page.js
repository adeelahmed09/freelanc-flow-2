"use client";
import React, { useState } from "react";
import Loader from "../components/Loader";
import { inter } from "../components/font";
import Input from "../components/sign-up/Input";
import InputPassword from "../components/sign-up/InputPassword";
import notify from "../components/Notify";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const [Loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password.length < 8) {
      setLoading(false);
      notify("error", "Password must be at least 8 characters");
      return;
    }

    try {
      await signIn("credentials", {
            username: formData.username,
            password: formData.password,
        });
        setFormData({
        username: "",
        password: "",
      });
      setTimeout(() => router.push("/"), 500);
      notify("success", "Successfully Logged In");
    } catch (err) {
      notify("error", err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full h-[83.5%] bg-[#1E1E1E] flex relative justify-center items-center rounded-2xl overflow-hidden">
      <Loader loading={Loading} />
      <div className="p-5 w-[300px] flex flex-col justify-center items-center bg-[#313131] rounded-2xl custom-shadow">
        <h1
          className={`${inter.className} text-2xl font-semibold text-[#EAEAEA]`}
        >
          Log In
        </h1>
        <form onSubmit={onSubmitHandler} className="flex flex-col gap-2">
          <Input
            LableText={"Username / Email:"}
            Value={formData.username}
            FieldName={"username"}
            fnc={onChangeHandler}
            Placeholder={"Enter Email or Username"}
          />
          <InputPassword
            LableText={"Password:"}
            Value={formData.password}
            FieldName={"password"}
            fnc={onChangeHandler}
            Placeholder={"Enter Password"}
          />
          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="px-3 py-2 font-bold text-[#EAEAEA] bg-[#8F6EFB] rounded-xl"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;

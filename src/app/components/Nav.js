"use client";
import { Menu, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { addUser, removeUser } from "@/store/UserSlice";
import axios from "axios";
function Nav() {
  const [Logged, setLogged] = useState(false);
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  const menu = useRef(null);
  const menuOpenningButton = useRef(null);
  const menuClosingButton = useRef(null);
  const {username} = useSelector(state=>state.user)
  //functions
  const GetUser = async (id) => {
    axios
      .post("/api/get-user", { id })
      .then((res) => {
        console.log(res);
        const userData = res.data.user;
        dispatch(
          addUser({
            username: userData.username,
            email: userData.email,
            name: userData.name,
            _id: userData._id,
          })
        );
      })
      .catch((err) => {
        console.log(err);
        dispatch(removeUser());
        console.log(err);
      });
  };
  useEffect(()=>{console.log(username);},[username])
  useEffect(() => {
    console.log(session);
    if (status === "authenticated") {
      GetUser(session.user._id)
      setLogged(true)
    } else {
      dispatch(removeUser());
      setLogged(false)
    }
  }, [status]);
  const menuOpeningHandler = () => {
    gsap.to(menu.current, {
      width: "75%",
      duration: 0.5,
      ease: "power2",
    });
  };
  const menuClosingHandler = () => {
    gsap.to(menu.current, {
      width: "0px",
      duration: 0.5,
      ease: "power2",
    });
  };
  return (
    <nav className="bg-[rgb(30,30,30)]  flex items-center sm:justify-end justify-between sm:mt-0 mt-2  w-full h-[100px] rounded-2xl ">
      <div className="pl-2 sm:hidden">
        <Image
          src={"/newBgLogo.png"}
          alt="logo"
          width={170}
          height={45}
          className="object-center object-contain"
        />
      </div>
      <div className="sm:flex hidden px-3 text-[#EAEAEA] gap-2">
        <div
          className={`${
            Logged ? "hidden" : "flex"
          } px-2.5 py-2 rounded-xl font-semibold bg-[#8F6EFB] hover:scale-105  transition`}
        >
          <Link href={"/sign-up"} className="">
            Sign Up
          </Link>
        </div>
        <div
          className={`${
            Logged ? "hidden" : "flex"
          } px-2.5 py-2 rounded-xl font-semibold bg-[#8F6EFB] hover:scale-105  transition`}
        >
          <Link href={"/log-in"}>Log In</Link>
        </div>
        <div
          className={`${
            Logged ? "flex" : "hidden"
          } px-2.5 py-2 rounded-xl font-semibold bg-[#8F6EFB] hover:scale-105  transition`}
        >
          <Link href={"/profile"} className="flex">
            <User color="#fff" size={24} strokeWidth={2.8} /> Profile
          </Link>
        </div>
      </div>
      <div className="pr-2 sm:hidden ">
        <Menu
          color="#8F6EFB"
          ref={menuOpenningButton}
          onClick={menuOpeningHandler}
          size={32}
          strokeWidth={2.8}
        />
      </div>
      <div
        ref={menu}
        className="w-[0px] sm:hidden fixed  right-0 top-0  py-12 h-screen backdrop-blur-2xl"
      >
        <div className="w-[75vw] px-4 overflow-hidden flex justify-end">
          <X
            color="#906FFC"
            ref={menuClosingButton}
            onClick={menuClosingHandler}
            size={32}
            strokeWidth={2.8}
          />
        </div>
        <div className="flex w-[75vw] text-[#EAEAEA] flex-col mt-3 px-12 overflow-hidden  gap-2 text-xl">
          <Link onClick={menuClosingHandler} href={"/"}>
            Dashboard
          </Link>
          <Link onClick={menuClosingHandler} href={"/project"}>
            Projects
          </Link>
          <Link onClick={menuClosingHandler} href={"/clients"}>
            Client
          </Link>
          <Link onClick={menuClosingHandler} href={"/invoice"}>
            Invoice
          </Link>
          <Link onClick={menuClosingHandler} href={"/setting"}>
            Profile Setting
          </Link>
          <div
            className={`${Logged ? "hidden" : "flex"} text-md text-white gap-2`}
          >
            <Link
              onClick={menuClosingHandler}
              href={"/log-in"}
              className="bg-[#906FFC] px-3 py-1 text-lg font-medium rounded-lg "
            >
              Log In
            </Link>
            <Link
              onClick={menuClosingHandler}
              href={"/sign-up"}
              className="bg-[#906FFC] px-3 py-1 text-lg font-medium rounded-lg"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

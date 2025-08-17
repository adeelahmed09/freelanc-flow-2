"use client";
import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="bg-[rgb(30,30,30)] flex items-center justify-end  w-full h-[100px] rounded-2xl ">
      <div className="flex px-3 text-[#EAEAEA] gap-2">
        <div className="px-2.5 py-2 rounded-xl font-semibold bg-[#8F6EFB] hover:scale-105  transition">
          <Link href={"/sign-up"} className="">Sign Up</Link>
        </div> 
        <div className="px-2.5 py-2 rounded-xl font-semibold bg-[#8F6EFB]  hover:scale-105 transition">
          <Link href={"/log-in"}>Log In</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { poppins } from "./font";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Presentation,
  ReceiptText,
  Settings,
  UserRound,
} from "lucide-react";

function SideBar() {
  const pathname = usePathname();
  return (
    <div className="w-[23vw] h-full bg-[#1E1E1E] px-2 sm:flex hidden flex-col  gap-[70px] py-8 rounded-3xl ">
      <div>
        <Image
          src={"/newBgLogo.png"}
          alt="logo"
          width={220}
          height={50}
          className="object-center object-contain"
        />
      </div>
      <ul
        className={`text-[#9a9a9a] px-3 flex flex-col gap-1.5 text-lg ${poppins.className} `}
      >
        <li
          className={`${pathname === "/" ? "side-active visible text-[#EAEAEA]" : ""
            } relative flex gap-1`}
        >
          <LayoutDashboard
            size={24}
            color={pathname === "/" ? "#8F6EFB" : "#696969"}
            strokeWidth={2}
          />
          <Link href={"/"}> Dashboard</Link>
        </li>
        <li
          className={`${pathname === "/project" ? "side-active visible text-[#EAEAEA]" : ""
            } relative flex gap-1`}
        >
          <Presentation
            size={24}
            color={pathname === "/project" ? "#8F6EFB" : "#696969"}
            strokeWidth={2}
          />
          <Link href={"#"}>Project</Link>
        </li>
        <li
          className={`${pathname === "/client" ? "side-active visible text-[#EAEAEA]" : ""
            } relative flex gap-1`}
        >
          <UserRound
            size={24}
            color={pathname === "/clients" ? "#8F6EFB" : "#696969"}
            strokeWidth={2}
          />
          <Link href={"#"}>Client</Link>
        </li>
        <li
          className={`${pathname === "/invoice" ? "side-active visible text-[#EAEAEA]" : ""
            } relative flex gap-1`}
        >
          <ReceiptText
            size={24}
            color={pathname === "/invoice" ? "#8F6EFB" : "#696969"}
            strokeWidth={2}
          />
          <Link href={"#"}>Invoice</Link>
        </li>
        <li
          className={`${pathname === "/profile" ? "side-active visible text-[#EAEAEA]" : ""
            } relative flex gap-1`}
        >
          <Settings
            size={24}
            color={pathname === "/settings" ? "#8F6EFB" : "#696969"}
            strokeWidth={2} />
          <Link href={"#"}>Profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;

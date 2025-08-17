"use client";
import React from "react";
import { inter } from "../font";

function Input({ LableText, Value, FieldName, fnc, Placeholder }) {
  return (
    <div>
      <label
        htmlFor="name"
        className={`${inter.className} text-lg font-semibold text-[#EAEAEA] `}
      >
        {LableText}
      </label>
      <input
        type="text"
        id="username"
        value={Value}
        name={FieldName}
        onChange={fnc}
        placeholder={Placeholder}
        className="w-full px-3 py-1.5 text-white rounded-lg outline-none border border-[#EAEAEA]"
      />
    </div>
  );
}

export default Input;

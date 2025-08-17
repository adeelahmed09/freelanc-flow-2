"use client";
import React, { useState } from "react";
import { inter } from "../font";
import { Eye, EyeClosed } from "lucide-react";

function InputPassword({ LableText, Value, FieldName, fnc, Placeholder }) {
  const [hidden, setHidden] = useState(true);
  const onClickHidder = (e) => {
    e.preventDefault();
    if (hidden) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };
  return (
    <div>
      <label
        htmlFor="name"
        className={`${inter.className} text-lg font-semibold text-[#EAEAEA] `}
      >
        {LableText}
      </label>
      <div className="w-full flex items-center gap-1">
        <input
          autoComplete="off"
          type={hidden ? "password" : "text"}
          id="username"
          value={Value}
          name={FieldName}
          onChange={fnc}
          placeholder={Placeholder}
          className="w-full px-3 py-1.5 text-white  rounded-lg outline-none border border-[#EAEAEA]"
        />
        <button onClick={onClickHidder}>
          <Eye color="#EAEAEA" size={28} className={hidden ? "hidden" : ""} />
          <EyeClosed
            color="#EAEAEA"
            size={28}
            className={hidden ? "" : "hidden"}
          />
        </button>
      </div>
    </div>
  );
}

export default InputPassword;

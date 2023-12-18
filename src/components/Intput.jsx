import React from "react";

export default function Intput({ text, htmlFor, onChange, value }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={htmlFor} className="text-orange-700 font-bold">
        {text}
      </label>
      <input
        type="text"
        id={htmlFor}
        className="bg-orange-200 text-orange-800 outline-none w-64 h-12 rounded-xl mb-5"
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
      ></input>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { mbtiQuestion } from "../data/mbti";

export default function MBTIQuestion({
  question,
  option,
  url,
  setIndex,
  index,
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative my-24">
        <img
          src={url}
          className="w-[500px] h-96 object-cover opacity-70 blur-sm"
          alt="image"
        ></img>
        <div className="w-1/2 absolute top-36 left-36 text-black text-xl font-bold">
          {question}
        </div>
      </div>
      <div className="flex flex-col">
        {option.map((option, i) => (
          <button
            className="bg-orange-300 text-white rounded-lg p-3 mb-3 hover:bg-orange-200 w-72"
            onClick={() => {
              setIndex(index + 1);
            }}
            key={i}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

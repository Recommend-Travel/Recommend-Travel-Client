import React, { useEffect, useState } from "react";
import { mbtiQuestion } from "../data/mbti";
import { useNavigate } from "react-router-dom";

export default function MBTIQuestion({
  question,
  option,
  url,
  setIndex,
  index,
  mbti,
  setMbti,
  value,
}) {
  const navigate = useNavigate();

  const mbtiResult = (index, value) => {
    setMbti([...mbti, (mbti[index] = value)]);
    if (index === 11) {
      arraySplice();
    }
  };

  const arraySplice = () => {
    let array = [...mbti];
    let result = [];
    for (let i = 0; i < array.length; i += 3) {
      let tempArray;
      tempArray = array.slice(i, i + 3);
      result.push(tempArray);
    }
    setMbti([result]);
  };

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
            className="bg-orange-300 text-white rounded-lg p-3 mb-3 hover:bg-orange-200 w-80"
            onClick={() => {
              setIndex(index + 1);
              // if (index === 11) navigate("/istp/result");
              mbtiResult(index, value[i]);
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

import React, { useEffect, useState } from "react";
import { mbtiQuestion } from "../data/mbti";
import MBTIQuestion from "../components/MBTIQuestion.jsx";
export default function Mbti() {
  const [index, setIndex] = useState(0);
  useEffect(() => {}, [index]);
  return (
    <div className="">
      <MBTIQuestion
        question={mbtiQuestion[index].question}
        option={mbtiQuestion[index].option}
        url={mbtiQuestion[index].imageUrl}
        index={index}
        setIndex={setIndex}
      />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { mbtiQuestion } from "../data/mbti";
import MBTIQuestion from "../components/MBTIQuestion.jsx";
import { useNavigate } from "react-router-dom";
export default function Mbti() {
  const [index, setIndex] = useState(0);
  const [mbti, setMbti] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (index === 12) {
      navigate("/result");
      let json = JSON.stringify(mbti);
      localStorage.setItem("mbtiResult", json);
    }
  }, [index]);
  return (
    <div className="">
      {index !== 12 ? (
        <MBTIQuestion
          question={mbtiQuestion[index].question}
          option={mbtiQuestion[index].option}
          url={mbtiQuestion[index].imageUrl}
          index={index}
          setIndex={setIndex}
          mbti={mbti}
          setMbti={setMbti}
          value={mbtiQuestion[index].value}
        />
      ) : null}
    </div>
  );
}

import React from "react";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex flex-col items-center mt-44 mb-24">
        <div className="text-4xl mb-3">나의 여행 MBTI 는 ?</div>
        <div>
          <img src={logo}></img>
          <span className="text-2xl font-bold">나의 여행 일지</span>
        </div>
      </div>
      <div className="flex flex-col">
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="bg-orange-300 text-white rounded-lg p-3 w-64 mb-5 hover:bg-orange-200"
        >
          로그인하러 가기
        </button>
        <button
          onClick={() => {
            navigate("/mbti");
          }}
          className="bg-orange-300 text-white rounded-lg p-3 w-64 hover:bg-orange-200 mb-5"
        >
          mbti 검사하기
        </button>
        <button
          onClick={() => {
            navigate("/community");
          }}
          className="bg-orange-300 text-white rounded-lg p-3 w-64 hover:bg-orange-200"
        >
          게시글 보러가기
        </button>
      </div>
    </div>
  );
}

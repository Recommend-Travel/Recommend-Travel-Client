import React, { useState } from "react";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";
import Intput from "../components/Intput";
import { useMutation } from "@tanstack/react-query";
import { login } from "../utility/api";
export default function Login() {
  const [id, setID] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const mutation = useMutation({ mutationFn: login });

  const handleSubmit = (e) => {
    mutation.mutate(
      {
        userid: id,
        password: password,
      },
      {
        onSuccess: (data) => {
          localStorage.clear();
          console.log(data);
          localStorage.setItem("token", data?.data.token);
          localStorage.setItem("userid", data?.data.user.userid);
          navigate("/");
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center mt-24">
        <div>
          <img
            src={logo}
            onClick={() => {
              navigate("/");
            }}
          ></img>
          <span className="text-2xl font-bold">나의 여행 일지</span>
        </div>
        <div className="text-orange-600 font-extrabold text-3xl text-center my-12">
          나와 어울리는 여행지를 찾아봐요!
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Intput
            text={"아이디"}
            htmlFor={"id"}
            onChange={setID}
            value={id}
            type={"text"}
          />
          <Intput
            text={"패스워드"}
            htmlFor={"password"}
            onChange={setPassword}
            value={password}
            type={"password"}
          />
          <button className="bg-orange-400 text-white outline-none w-64 h-12 rounded-xl hover:bg-orange-300 mb-3">
            로그인 하기
          </button>
        </form>
        <span
          className="text-orange-500 cursor-pointer"
          onClick={() => {
            navigate("/join");
          }}
        >
          회원가입 하러 가기
        </span>
      </div>
    </div>
  );
}

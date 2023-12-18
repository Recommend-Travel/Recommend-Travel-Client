import React, { useState } from "react";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";
import Intput from "../components/Intput";
import { useMutation } from "@tanstack/react-query";
import { register } from "../utility/api";
export default function Join() {
  const [id, setID] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: register,
  });

  const handleSubmit = () => {
    mutation.mutate(
      {
        userid: id,
        username: name,
        password: password,
        email: email,
      },
      {
        onSuccess: (data) => {
          console.log(data);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center mt-24">
        <div>
          <img src={logo}></img>
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
            text={"이름"}
            htmlFor={"name"}
            onChange={setName}
            value={name}
            type={"text"}
          />
          <Intput
            text={"아이디"}
            htmlFor={"id"}
            onChange={setID}
            value={id}
            type={"text"}
          />
          <Intput
            text={"이메일"}
            htmlFor={"email"}
            onChange={setEmail}
            value={email}
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
            회원가입 완료
          </button>
        </form>
      </div>
    </div>
  );
}

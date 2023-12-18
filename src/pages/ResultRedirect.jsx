import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { mbtiTest } from "../utility/api";
import { useNavigate } from "react-router-dom";
export default function ResultRedirect() {
  let result = localStorage.getItem("mbtiResult");
  result = JSON.parse(result);
  const mutation = useMutation({ mutationFn: mbtiTest });
  const [mbti, setMbti] = useState(result[0]);
  const navigate = useNavigate();
  useEffect(() => {
    mutation.mutate(mbti, {
      onSuccess: (data) => {
        navigate(`/${data.data}/result`);
      },
      onError: (err) => {
        console.log(err);
      },
    });
  }, [mbti]);

  return <div>ResultRedirect</div>;
}

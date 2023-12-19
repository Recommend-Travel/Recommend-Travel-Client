import React, { useState } from "react";
import { result } from "../data/result";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getMBTIDestination } from "../utility/api";
import { zzim } from "../utility/api";
export default function Result() {
  const { mbti } = useParams();
  const [url, setUrl] = useState();
  const [name, setName] = useState();
  const token = localStorage.getItem("token");
  const { data, error } = useQuery({
    queryKey: ["result", mbti],
    queryFn: () => getMBTIDestination(mbti),
  });

  const mutation = useMutation({ mutationFn: zzim });

  const handleZzim = async (e) => {
    e.preventDefault();
    mutation.mutate(
      {
        token: token,
        destinationName: name,
        imgUrl: url,
      },
      {
        onSuccess: (data) => {
          alert("찜 성공!");
          console.log(data);
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  };
  console.log(data);

  return (
    <div className="flex flex-col items-center">
      <div className="text-5xl text-orange-400 font-extrabold mt-24 mb-10 font-mono">
        {data?.data.mbti}
      </div>
      <div className="w-3/4 bg-orange-100 text-orange-800 p-10 rounded-2xl">
        {data?.data.message}
      </div>
      <div className="flex mt-10">
        {data?.data.recommendedDestinations.map((destination) => (
          <div
            className="flex flex-col items-center mx-5"
            onClick={(e) => {
              setName(destination.name);
              setUrl(destination.url);
              handleZzim(e);
            }}
          >
            <img
              src={destination.url}
              className="rounded-full w-40 h-40 object-cover"
            ></img>
            <div className="text-xl mt-3">{destination.name}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-between w-2/4 bg-orange-100 p-10 rounded-2xl mt-5">
        <div className="flex flex-col items-center text-blue-700">
          <div>환상의 파트너</div>
          <div>{data?.data.bestPartner}</div>
        </div>
        <div className="flex flex-col items-center text-red-600">
          <div>환장의 파트너</div>
          <div>{data?.data.worstPartner}</div>
        </div>
      </div>
    </div>
  );
}

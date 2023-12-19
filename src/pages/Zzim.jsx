import React, { useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getZzim } from "../utility/api";
export default function Zzim() {
  const userid = localStorage.getItem("userid");

  const { data, error } = useQuery({
    queryKey: ["result", userid],
    queryFn: () => getZzim(userid),
  });
  console.log(data);
  return (
    <div className="flex flex-col items-center ">
      <div className="text-3xl text-orange-500 py-20">
        내 찜목록({data?.data.mbti})
      </div>
      <div className="flex flex-wrap">
        {data?.data.favoriteDestinations.map((destination) => (
          <div className="flex flex-col items-center mx-5 my-3">
            <img
              src={destination.url}
              className="rounded-full w-40 h-40 object-cover"
            ></img>
            <div className="text-xl mt-3">{destination.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

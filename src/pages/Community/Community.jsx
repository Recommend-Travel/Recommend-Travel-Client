import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getPost } from "../../utility/api";
import { useQuery } from "@tanstack/react-query";
const Community = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const { data, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPost,
  });

  console.log(data?.data);
  console.log(error)

  return (
    <div className="flex flex-col">
      <h1 className="my-20 text-3xl font-bold text-center">게시글 목록</h1>
      <ul className="space-y-4">
        {data?.data.map((post) => (
          <li key={post.postId}>
            <a
              href={`/posts/${post.postId}`}
              className="block p-4 border border-gray-300 
              rounded-md hover:shadow-md transition 
              duration-300 mx-10"
            >
              {post.title}
            </a>
            {post.mbti}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          navigate("/create-post");
        }}
        className="block text-center text-white 
        bg-orange-500 p-3 rounded-md my-10
        hover:bg-orange-600 mx-10"
      >
        글 쓰러 가기
      </button>
    </div>
  );
};

export default Community;

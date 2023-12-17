import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Community = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const dummyData = [
      {
        id: 1,
        title: "첫 번째 게시글",
        content: "이것은 첫 번째 게시글입니다.",
      },
      {
        id: 2,
        title: "두 번째 게시글",
        content: "이것은 두 번째 게시글입니다.",
      },
      {
        id: 3,
        title: "세 번째 게시글",
        content: "이것은 세 번째 게시글입니다.",
      },
    ];
    setPosts(dummyData);
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="my-20 text-3xl font-bold text-center">게시글 목록</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <a
              href={`/posts/${post.id}`}
              className="block p-4 border border-gray-300 
              rounded-md hover:shadow-md transition 
              duration-300 mx-10"
            >
              {post.title}
            </a>
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

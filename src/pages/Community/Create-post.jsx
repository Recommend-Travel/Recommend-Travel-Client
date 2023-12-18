import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "../../utility/api";
import { useNavigate } from "react-router-dom";
const PostCommunity = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const mutation = useMutation({ mutationFn: createPost });
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate(
      {
        token: token,
        title: title,
        content: content,
      },
      {
        onSuccess: (data) => {
          alert("생성 성공!");
          navigate(`/community`);
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  };

  return (
    <form className="flex flex-col max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="my-20 mb-10">
        <label className="block text-sm font-medium text-gray-600">제목:</label>
        <input
          type="text"
          id="title"
          className="mt-2 p-2 w-full border rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-600"
        >
          내용:
        </label>
        <textarea
          id="content"
          className="mt-1 p-2 w-full h-80 border rounded-md"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-brown text-white rounded-md hover:bg-brown-600 focus:outline-none focus:shadow-outline-brown active:bg-brown-800"
      >
        게시글 작성
      </button>
    </form>
  );
};

export default PostCommunity;

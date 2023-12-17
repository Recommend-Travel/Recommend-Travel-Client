import React, { useState } from "react";
import axios from "axios";

const PostCommunity = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //axios처리 클래스로 만들 시 차후 수정할 것
    try {
      //제목, 내용 저장 + 유저 아이디도 저장(?)
      const response = await axios.post("/api/posts", {
        title,
        content,
      });

      console.log("게시글이 성공적으로 작성되었습니다.", response.data);

      setTitle("");
      setContent("");
    } catch (error) {
      console.error("게시글 작성 중 오류가 발생했습니다.", error);
    }
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

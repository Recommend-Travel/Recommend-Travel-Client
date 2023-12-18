import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPostDetail } from "../../utility/api";
import Intput from "../../components/Intput";
import { useMutation } from "@tanstack/react-query";
import { createComment } from "../../utility/api";
const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState();
  const mutation = useMutation({ mutationFn: createComment });
  const token = localStorage.getItem("token");
  const { data, error } = useQuery({
    queryKey: ["result", id],
    queryFn: () => getPostDetail(id),
  });

  console.log(data?.data.PostInfo?.postId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate(
      {
        token: token,
        content: comment,
        postid: data?.data.PostInfo?.postId,
      },
      {
        onSuccess: (data) => {
          alert("생성 성공!");
          window.location.reload();
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  };

  return (
    <div>
      <div className="pt-24 flex flex-col items-center ">
        <h1 className="text-3xl font-bold mb-4">{data?.data.PostInfo.title}</h1>
        <div className="my-3 text-3xl text-orange-500 font-bold">{`MBTI:${data?.data.PostInfo.mbti_type}`}</div>
        <div className="text-gray-600 p-3 bg-orange-200 w-3/4 text-orange-900 rounded-2xl">
          {data?.data.PostInfo.content}
        </div>
      </div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex justify-center mt-10 items-center"
      >
        <Intput
          text={"댓글"}
          htmlFor={"name"}
          onChange={setComment}
          value={comment}
          type={"text"}
        />
        <button className="w-16 h-12 rounded-2xl bg-orange-700 ml-5 text-white hover:bg-orange-600">
          작성
        </button>
      </form>
      <div className="flex flex-col justify-center items-center">
        <div className="my-3">댓글 목록</div>
        {data?.data.commentsInfo.map((comment) => (
          <div className="border-2 w-3/4 p-2 my-2">
            <div>{comment.user.username}</div>
            <div>{comment.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostDetail;

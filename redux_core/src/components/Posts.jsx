import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/middlewares/postMiddlewares";

const Posts = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.posts.postList);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <ul>
        {postList.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;

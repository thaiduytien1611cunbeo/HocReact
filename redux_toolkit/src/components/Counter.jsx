import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from "../redux/slice/counterSlice";
import { getPosts } from "../redux/middlewares/postMiddleware";
const { increment, decrement } = counterSlice.actions;

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const handleIncrement = () => {
    dispatch(increment(5));
  };
  const handleDecrement = () => {
    dispatch(decrement(5));
  };
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const postList = useSelector((state) => state.counter.postList);
  const status = useSelector((state) => state.counter.status);

  if (status === "error") return <h3>ERROR</h3>;
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <h2>Danh sach bai viet</h2>
      {status !== "idle" && status === "pending" ? (
        <h2>Loading...</h2>
      ) : (
        postList.map(({ id, title }) => <h3 key={id}>{title}</h3>)
      )}
    </div>
  );
};

export default Counter;

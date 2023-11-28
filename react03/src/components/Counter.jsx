import { useContext, useState } from "react";
import { AppContext } from "../App";

const Counter = () => {
  const { data, handler } = useContext(AppContext);

  return (
    <div>
      <h1>Counter: {data.count}</h1>
      <h2>{data.message}</h2>
      <button
        onClick={() => {
          handler("increment");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          handler("decrement");
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;

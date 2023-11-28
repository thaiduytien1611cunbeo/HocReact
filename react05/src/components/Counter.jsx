import React, { useEffect, useRef, useState } from "react";
import Content from "./Content";
import Title from "./Title";

function Counter() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const inputRef = useRef();

  const handleIncrement = () => {
    countRef.current++;
    setCount(count + 1);
    console.log(countRef);
  };

  const titleRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    console.log(titleRef);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <input type="text" ref={inputRef} />
      <Content />
      <Title ref={titleRef} />
    </div>
  );
}

export default Counter;

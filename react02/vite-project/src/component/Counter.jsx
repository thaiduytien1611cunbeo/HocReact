import { useEffect, useState } from "react";
let a = 0;

const Counter = () => {
  //Gọi Hook ở đây
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // Không được gọi hook ở đây
    // setCount(count + 1);
    setCount((count) => count + 1);
  };
  const handleDecrement = () => {
    // Không được gọi hook ở đây
    setCount(count - 1);
  };
  if (count >= 10) a = 11;
  //Gọi Hook ở đây
  useEffect(() => {
    console.log("effect :" + count);
  }, [a]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Counter;

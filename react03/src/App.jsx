import { createContext, useContext, useEffect, useState } from "react";
import Counter from "./components/Counter";
export const AppContext = createContext();

const App = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const handler = (type) => {
    if (type === "increment") {
      setCount(count + 1);
    }
    if (type === "decrement") {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    if (count === 10) setMessage("Học React không khó");
  }, [count]);

  return (
    <AppContext.Provider
      value={{
        data: {
          count,
          message,
        },
        handler,
      }}
    >
      <div>
        <h1>Context API</h1>
        <Counter />
      </div>
    </AppContext.Provider>
  );
};

export default App;

// Context API
// A -> B -> C -> D => Truyền qua PROPS

// Muốn truyền thẳng A -> D

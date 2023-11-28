import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useEffect, useState } from "react";

function Todo() {
  const [todoList, setTodoList] = useState([]);

  const handleTodo = (todo) => {
    setTodoList([...todoList, todo]);
  };

  return (
    <>
      <TodoList todoList={todoList} />
      <TodoForm handleTodo={handleTodo} />
    </>
  );
}

export default Todo;

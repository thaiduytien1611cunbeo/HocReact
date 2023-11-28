import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions/todoActions";

const Todo = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputRef.current.value));
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>Todo App</h1>
      <ul>
        <li>Công Việc 1</li>
        <li>Công Việc 2</li>
        <li>Công Việc 3</li>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tên Công việc"
          ref={inputRef}
        />
        <button>Thêm</button>
      </form>
    </div>
  );
};

export default Todo;

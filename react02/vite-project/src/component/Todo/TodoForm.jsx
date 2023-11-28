import React from "react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ handleTodo }) {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim().length) {
      alert("Vui lòng nhập tên công việc");
      return;
    }

    const todo = {
      id: uuidv4(),
      name,
      completed: false,
    };
    handleTodo(todo);
    setName("");
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên công việc..."
          onChange={handleChange}
          value={name}
        />
      </form>
    </div>
  );
}

export default TodoForm;

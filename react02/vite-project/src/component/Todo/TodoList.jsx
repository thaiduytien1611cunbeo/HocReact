import React from "react";

function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todoList.map(({ id, name, completed }) => {
          return (
            <li key={id}>
              <label>
                <input type="checkbox" defaultChecked={completed || false} />
                {name}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;

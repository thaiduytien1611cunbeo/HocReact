export const addTodo = (todo) => {
  return {
    type: "Todo/addTodo",
    payload: todo,
  };
};

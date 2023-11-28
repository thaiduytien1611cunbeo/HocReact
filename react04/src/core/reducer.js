export const initialState = {
  count: 0,
  todoList: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "counter/increment": {
      return { ...state, count: state.count + 1 };
    }
    case "counter/decrement": {
      return { ...state, count: state.count - 1 };
    }
    case "todo/add": {
      return { ...state, todoList: [...state.todoList, action.payload] };
    }
    case "todo/remove": {
      return {
        ...state,
        todoList: state.todoList.filter((_, index) => index !== action.payload),
      };
    }
    default:
      return state;
  }
};

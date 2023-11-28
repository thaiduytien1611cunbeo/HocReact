const initialState = {
  postList: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "posts/fetch": {
      return { ...state, postList: action.payload };
    }
    default: {
      return state;
    }
  }
};

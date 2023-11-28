import React, { children } from "react";

const User = ({ name, email, age, onGetData, children }) => {
  console.log(children);
  return (
    <div>
      {children}
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h2>{age}</h2>
      <button
        onClick={() => {
          onGetData("Hello F8");
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default User;

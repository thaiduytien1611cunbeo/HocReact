// Fragment : React.Fragment
// Sort : <></>

import React, { Fragment } from "react";

const App = () => {
  const users = [
    {
      id: 1,
      name: "User 1",
      email: "user1@gmail.com",
    },
    {
      id: 2,
      name: "User 2",
      email: "user2@gmail.com",
    },
  ]; // Render users len UI

  return (
    <>
      {users.map(({ id, name, email }) => {
        return (
          <React.Fragment key={id}>
            <h2>{name}</h2>
            <h3>{email}</h3>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default App;

import React from "react";
import User from "./components/User";

const App = () => {
  const user = [
    {
      id: 1,
      name: "User 1",
      email: "user1@gmail.com",
      age: 18,
    },
    {
      id: 2,
      name: "User 2",
      email: "user2@gmail.com",
      age: 19,
    },
    {
      id: 3,
      name: "User 3",
      email: "user3@gmail.com",
      age: 18,
    },
  ];

  const handleGetData = (data) => {
    console.log(data);
  };

  //   return <User onGetData={handleGetData} />;

  return (
    <User name="Duy Tien" email="duytien@gmail.com" age="18">
      <h2>Thông tin User</h2>
    </User>
  );
};

export default App;

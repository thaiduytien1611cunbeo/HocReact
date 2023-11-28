// Tạo functional component : rafce
import React from "react";

const App = () => {
  const html = `<h1>Học React không khó</h1>`;
  const isLogin = true;
  const handleClick = (e) => {
    console.log(e);
  };
  const handleClick2 = (text) => {
    console.log(text);
  };

  const users = [
    <h3 key={1}>User 1</h3>,
    <h3 key={2}>User 2</h3>,
    <h3 key={3}>User 3</h3>,
  ];

  const products = [
    {
      id: 1,
      name: "Product 1",
    },
    {
      id: 2,
      name: "Product 2",
    },
    {
      id: 3,
      name: "Product 3",
    },
  ];

  return (
    <div>
      {/* <h1>App</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      ></div>
      {html} */}

      {/* {isLogin ? (
        <h2>Chào mừng bạn quay trở lại</h2>
      ) : (
        <h2>Vui lòng đăng nhập </h2>
      )} */}

      {/* {users}
      {isLogin && <h2>Chào mừng bạn đến với F8</h2>}
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={(e) => {
          handleClick2(e.target.innerText);
        }}
      >
        Click Me 2
      </button> */}

      {products.map(({ id, name }) => {
        return <h2 key={id}>{name}</h2>;
      })}
    </div>
  );
};

export default App;

// Tạo class Component: rce
// import React, { Component } from 'react'

// export class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }

// export default App

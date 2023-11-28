import ReactDOM from "react-dom/client";
import React from "react";
// import App from "./App01";
import App from "./App";

// Render UI
const root = document.querySelector("#root");

//React Element
// const h1 = React.createElement(
//   'h1',
//   {
//     className: "title"
//   },
//   "Học React Không khó"
//   );

// const h2 = React.createElement(
//   'h2',
//   {
//     className: "title"
//   },
//   "Học React dễ hơn JS"
// )

// const button = React.createElement(
//   'button',
//   {
//     className: "btn",
//     onClick: (e) => {
//       e.target.style.color = "red";
//     }
//   },
//   "Click Me"
// )

// const ul = React.createElement(
//   "ul",
//   {
//     className: "lists",
//   },
//   ...[...Array(100).keys()].map((index) =>
//     React.createElement(
//       'li', {}, `Item ${index + 1}`),
//   ),
// );

// const div = React.createElement(
//   'div',
//   {
//     id: 'main',
//     className:"main",
//     "data-name": "hello",
//     style: {
//       fontWeight: "bold",
//       textDecoration: "underline",
//     }
//   },
//   ul,
//   h1,
//   h2,
//   button,
// );

// JSX
// const title = "Hello F8";

// const getName = () => {
//   return <h2>Duy Tiến</h2>;
// };

// const Product = () => {
//   return <h2>Sản Phẩm ABC</h2>;
// }; //=> Hàm có chữ đầu viết hoa là component

// const Welcome = () => {
//   return <h2>Học React không khó</h2>;
// };

// class Welcome2 extends React.Component {
//   render() {
//     return <h2>Học React dễ hơn JS</h2>;
//   }
// }

// const div = (
//   <div className="content">
//     <h1>{title}</h1>
//     {getName()}
//     <Product />
//     <Welcome></Welcome>
//     <Welcome2></Welcome2>
//   </div>
// );

ReactDOM.createRoot(root).render(<App></App>);

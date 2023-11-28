import React from "react";

// const color = (ParentComponent) => {
//   const MyComponent = (props) => {
//     console.log("color");
//     return <ParentComponent {...props} />;
//   };
//   return MyComponent;
// };

const Content = React.memo(function () {
  console.log("Content Render");
  return (
    <div>
      <h1>Học React rất dễ</h1>
    </div>
  );
});

export default Content;

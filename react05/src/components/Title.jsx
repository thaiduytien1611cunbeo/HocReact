import React from "react";
import { forwardRef } from "react";

const Title = forwardRef(function Title(props, ref) {
  return (
    <div>
      <h1 ref={ref}>Học React Không khó</h1>
    </div>
  );
});

export default Title;

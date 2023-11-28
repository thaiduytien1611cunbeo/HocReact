import React, { forwardRef, useRef } from "react";
import Image from "./Image";

function ImageBox(props) {
  const imageRef = useRef();
  console.log(imageRef);

  const handleZoomIn = () => {
    imageRef.current.zoomIn();
  };
  const handleZoomOut = () => {
    imageRef.current.zoomOut();
  };
  const handleReset = () => {
    imageRef.current.reset();
  };

  return (
    <div>
      <Image ref={imageRef} />
      <hr />
      <button onClick={handleZoomIn}>ZoomIn</button>
      <button onClick={handleZoomOut}>ZoomOut</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default ImageBox;

import React from "react";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/cam-on");
  };
  return (
    <div>
      <h1>CheckOut</h1>
      <button onClick={handleClick}>Đặt hàng</button>
    </div>
  );
};

export default CheckOut;

import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  return (
    <div>
      <h1>Chi Tiet San Pham : {params.id}</h1>
      <h1>Slug : {params.slug}</h1>
    </div>
  );
};

export default ProductDetail;

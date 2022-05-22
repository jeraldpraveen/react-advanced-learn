import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  return (
    <section>
      <h1>ProductDetail</h1>
      {params.productId}
    </section>
  );
};

export default ProductDetails;

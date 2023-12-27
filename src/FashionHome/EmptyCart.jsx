import React from "react";
import noCart from "../Image/NotFindCart.png";
const EmptyCart = () => {
  return (
    <>
      <div className=" d-flex  justify-content-center">
        <img src={noCart} alt="" />
      </div>
      <div className=" text-center">
        <h2>No Product Found!</h2>
      </div>
    </>
  );
};

export default EmptyCart;

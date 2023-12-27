import React from "react";
import { Link } from "react-router-dom";
const ShopToHome = () => {
  return (
    <>
      <div className="pt-5">
        <h6 className="mb-0">
          <Link
            to="/"
            className="text-body "
            style={{ textDecoration: "none" }}
          >
            <i className="bi bi-arrow-left" style={{ fontSize: "1.2rem" }}></i>
            <span
              className=" ms-2"
              style={{
                fontSize: "1.2rem",
              }}
            >
              Back to shop
            </span>
          </Link>
        </h6>
      </div>
    </>
  );
};

export default ShopToHome;

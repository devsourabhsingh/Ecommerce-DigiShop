import React from "react";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = () => {
  
  return (
    <div className=" col-md-4 d-flex justify-content-center my-2">
      <div
        className="card d-flex align-items-center new-img-card mt-4"
        style={{ width: "20rem", height: "20rem" }}
      >
        <Skeleton height={150} width={200} />
        <div className="card-body">
          <h5 className="card-title">
            <Skeleton count={2} height={20} width={250} />
          </h5>
          <h5 className="mt-2">
            <Skeleton width={100} height={35} />
          </h5>
          <h5>
            <Skeleton width={120} />
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;

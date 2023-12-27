import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonEffect = () => {
  
  return (
    <>
      <div className="row">
        <div className=" container">
          <div className=" container new-detail-shadow">
            <div className="card mb-3 single-product-card mt-2">
              <div className="row g-0 mt-5">
                <div className="col-md-4">
                  <Skeleton width={320} height={320} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <Skeleton height={20} />
                    <Skeleton height={30} width={200} />
                    <div>
                      <div className=" mt-3">
                        <p>
                          <Skeleton height={30} width={150} />
                        </p>
                      </div>
                    </div>
                    <p className=" mt-3">
                      <Skeleton count={3} />
                    </p>
                  </div>
                  <button type="button" className=" ms-3 border-0 text-white">
                    <Skeleton
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "transparent",
                        padding: "none",
                      }}
                      width={150}
                      height={40}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* )} */}
        </div>
      </div>
    </>
  );
};

export default SkeletonEffect;

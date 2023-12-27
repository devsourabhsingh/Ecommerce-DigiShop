import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectedProducts,
  addToCart,
  removeProducts,
} from "../Redux/Actions/ProductActions";
import { PiTag } from "react-icons/pi";
import SkeletonEffect from "../Skeleton/SkeletonEffect";

const ProductDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();
  const selectProduct = useSelector(
    (state) => state.singleProduct.selectedProduct
  );
  const { id, title, price, image, category, description } =
    selectProduct || {};
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeProducts());
    setIsLoading(true);
    if (productId && productId !== "") {
      axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => {
          setIsLoading(false);
          dispatch(selectedProducts(res.data));
        });
    }
  }, [productId, dispatch]);

  const handleAddToCart = () => {
    dispatch(addToCart(selectProduct));
  };

  return (
    <>
      <div className="row">
        <div className=" container">
          <div className=" mx-5">
            <Link to="/">
              <i className="bi bi-arrow-left-circle-fill"></i>
            </Link>
          </div>
          {isLoading ? (
            <SkeletonEffect />
          ) : (
            <div className=" container new-detail-shadow">
              <div className="card mb-3 single-product-card mt-2" key={id}>
                <div className="row g-0 mt-5">
                  <div className="col-md-4">
                    <img
                      src={image}
                      Name
                      className="img-fluid rounded-start new-detail-image"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <span className=" d-flex gap-2 align-items-center">
                        <h5 className="">${price}</h5>
                        <PiTag style={{ fontSize: "1.5rem" }} />
                      </span>
                      <div>
                        <div className=" mt-3  new-category-detail">
                          <p className="deatil-fashion-category">{category}</p>
                        </div>
                      </div>
                      <p className=" mt-3">{description}</p>
                    </div>
                    <button
                      type="button"
                      className="btn-cart rounded-5 border-0 text-white"
                      onClick={handleAddToCart}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

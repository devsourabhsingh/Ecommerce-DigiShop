import React, { useEffect, useState } from "react";
import CardSkeleton from "../Skeleton/CardSkeleton";
import ProductsComponent from "./ProductsComponent";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "../Redux/Actions/ProductActions";

const NewProductListing = () => {
  const skeletenArray = [1, 2, 3, 4, 5, 6];
  const [newLoading, setNewLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setNewLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setNewLoading(false);
        dispatch(setProducts(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <>
      <div className="container">
        {newLoading ? (
          <div className="row">
            {skeletenArray.map((id) => {
              return (
                <>
                  <CardSkeleton key={id} />
                </>
              );
            })}
          </div>
        ) : (
          <ProductsComponent />
        )}
      </div>
    </>
  );
};

export default NewProductListing;

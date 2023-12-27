import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Category from "./Category";
import { setProducts } from "../Redux/Actions/ProductActions";
import SearchEmptyFound from "./SearchEmptyFound";
import newFashion from "../Image/digilogo.png";

const Home = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  useEffect(() => {
    if (searchItem.length > 3) {
      delaySearch();
    }
    if (searchItem === "") {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          dispatch(setProducts(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [searchItem?.length]);

  useEffect(() => {
    const newData = "All";
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setCategoryData([...res.data, newData].sort());
    });
  }, []);

  const handleChange = (event) => {
    setSearchItem(event.target.value);
  };

  const delaySearch = () => {
    const newSearch = products?.filter((product) =>
      product?.title?.toLowerCase().includes(searchItem?.toLowerCase())
    );
    dispatch(setProducts(newSearch));
  };

  return (
    <>
      <div className=" container">
        <div className="new-nav-shadow">
          <nav className="navbar navbar-head">
            <div className="three-grid">
              <div>
                <Link to="/">
                  <img className="new-fashion" src={newFashion} alt="" />
                </Link>
              </div>
              <div>
                <form className="d-flex" role="search">
                  <div class="input-group mt-2 mb-2">
                    <input
                      type="text"
                      className="search-bar"
                      size="40"
                      value={searchItem}
                      onChange={handleChange}
                      placeholder=" Search for product..."
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                    <button className=" new-btn-search">
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <Category
                  categoryData={categoryData}
                  setCategoryData={setCategoryData}
                />
              </div>
            </div>
          </nav>
        </div>
      </div>
      {products?.length === 0 ? <SearchEmptyFound /> : null}
    </>
  );
};

export default Home;

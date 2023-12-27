import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Redux/Actions/ProductActions";

const Category = ({ categoryData }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.addCart.cartData);

  const handleCategory = (newCategory) => {
    if (newCategory === "All") {
      axios.get("https://fakestoreapi.com/products").then((res) => {
        dispatch(setProducts(res.data));
      });
    } else {
      axios
        .get(`https://fakestoreapi.com/products/category/${newCategory}`)
        .then((res) => {
          dispatch(setProducts(res.data));
        });
    }
  };

  return (
    <div className=" d-flex align-items-center gap-5">
      <div>
        {categoryData && categoryData?.length > 0 && (
          <select
            className="form-select input-select"
            aria-label="Default select example"
            onChange={(e) => handleCategory(e.target.value)}
          >
            {categoryData.map((newCategory, id) => {
              return (
                <>
                  <option key={id} value={newCategory}>
                    {newCategory}
                  </option>
                </>
              );
            })}
          </select>
        )}
      </div>
      <div>
        <Link to="/getallcart">
          <button className="new-shop-btn position-relative">
            <i className="bi bi-cart4"></i>
            <span className="position-absolute top-0  badge text-bg-secondary">
              {cart?.length}
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Category;

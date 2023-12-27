import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductsComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  
  return (
    <div className="row">
      {products?.map((product) => {
        const { id, title, price, image, category } = product;
        return (
          <div className="col-md-4 my-4 d-flex justify-content-center ">
            <Link className="text-decoration-none" to={`/product/${id}`}>
              <div
                className="card d-flex align-items-center new-img-card"
                style={{ width: "20rem", height: "20rem" }}
                key={id}
              >
                <img
                  src={image}
                  className="card-img-top new-dress-img pt-2 "
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <h4> ${price}</h4>
                  <p className="card-text opacity-50">{category}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsComponent;

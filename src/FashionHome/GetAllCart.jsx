import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import SubCartData from "../SubCart Component/SubCartData";
import OrderPlace from "../SubCart Component/OrderPlace";
import ShopToHome from "../SubCart Component/ShopToHome";

const GetAllCart = () => {
  let totalSum = 0;
  const cart = useSelector((state) => state.addCart.cartData);

  cart.forEach((newCart) => {
    totalSum += (newCart.count || 1) * newCart.price;
  });

  return (
    <>
      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2 new-cart-shadow"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">
                            Shopping Cart
                          </h1>
                          <h6 className="mb-0 text-muted">
                            {cart.length} items
                          </h6>
                        </div>
                        <hr className="my-4" />
                        {cart.length === 0 ? <EmptyCart /> : null}
                        {cart.map((newCart) => {
                          const { id, image, price, category, title } = newCart;
                          return (
                            <>
                              <SubCartData
                                id={id}
                                image={image}
                                price={price}
                                category={category}
                                title={title}
                                newCart={newCart}
                              />
                            </>
                          );
                        })}
                        <ShopToHome />
                      </div>
                    </div>
                    <OrderPlace totalSum={totalSum} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetAllCart;

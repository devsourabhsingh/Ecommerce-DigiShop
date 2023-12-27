import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const OrderPlace = ({ totalSum }) => {
  const [totalNumber, setTotalNumber] = useState(0);
  const [applyCode, setApplyCode] = useState("");
  const cart = useSelector((state) => state.addCart.cartData);
  const handleChange = (selectValue) => {
    const selectedNumber = parseFloat(selectValue);
    const totalValue = totalSum + selectedNumber;
    setTotalNumber(totalValue);
  };
  const handlePlaceClick = () => {
    if (cart.length === 0) {
      alert("please Select Product");
    } else {
      alert("Place order Successfully");
    }
  };
  const handleApplyChange = (event) => {
    setApplyCode(event.target.value);
  };
  useEffect(() => {
    if (totalSum) {
      setTotalNumber(totalSum);
    }
  }, [totalSum]);

  const applyGift = () => {
    const finalPrice = (10 / 100) * totalSum;
    const discountPrice = totalSum - finalPrice;
    const roundPrice = Math.round(discountPrice);
    console.log(roundPrice);
    if (applyCode === "DIGI10") {
      setTotalNumber(roundPrice);
    } else {
      alert("incorrect code ");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    applyGift();
  };

  return (
    <>
      <div className="col-lg-4 bg-grey">
        <div className="p-5">
          <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
          <hr className="my-4" />

          <div className="d-flex justify-content-between mb-4">
            <h5 className="text-uppercase">items {cart.length}</h5>
            <h5>$ {totalSum}</h5>
          </div>
          <h5 className="text-uppercase mb-3">Shipping Charges</h5>

          <select
            className="form-select mb-3 input-select"
            aria-label="Default select example"
            onChange={(e) => handleChange(e.target.value)}
            defaultValuevalue={0}
          >
            <option selected value="0">
              Normal Delivery
            </option>
            <option value="5">Standard Delivery-$ 5.00</option>
          </select>

          <h5 className="text-uppercase mb-3">Promo code</h5>

          <div className="mb-5">
            <form onSubmit={handleSubmit}>
              <div className="form-outline">
                <input
                  type="text"
                  id="form3Examplea2"
                  value={applyCode}
                  onChange={handleApplyChange}
                  className="form-control form-control-lg input-select"
                />
                <div className=" mt-2 d-flex justify-content-between ">
                  <p className="promo-code">Use DIGI10 to get 10% discount</p>
                  <button className="apply-code">Apply code</button>
                </div>
              </div>
            </form>
          </div>

          <hr className="my-4" />

          <div className="d-flex justify-content-between mb-5">
            <h5 className="text-uppercase">Total price</h5>
            <h5>$ {totalNumber}</h5>
          </div>
          <button
            type="button"
            className="btn btn-dark btn-block btn-lg"
            data-mdb-ripple-color="dark"
            onClick={handlePlaceClick}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderPlace;

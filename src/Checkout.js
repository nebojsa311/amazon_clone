import React from "react";
import "./Checkout.css";
import Subtotal from './Subtotal.js'
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          className="checkout__add"
          alt="checkout add"
        ></img>

        <div className="checkout__title">
          <h2>Your shopping Basket</h2>

          {/* Items */}
          {/* Items */}
          {/* Items */}
          {/* Items */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

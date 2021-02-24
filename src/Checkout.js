import React from "react";
import "./Checkout.css";
import Product from "./Product";
import Subtotal from "./Subtotal";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log("Baset in CHeckout", basket);
  const name = user?.email.split("@")[0];
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg"></img>
        <div className="checkout__title">
          <h2>Hello {name}</h2>
          <h3>Your Shopping Basket</h3>
        </div>
        {basket.length != 0 ? (
          basket.map(({ desc, price, image, rating, id }) => (
            <CheckoutProduct
              id={id}
              desc={desc}
              image={image}
              price={price}
              rating={rating}
            ></CheckoutProduct>
          ))
        ) : (
          <h2>Your Cart Empty !</h2>
        )}
      </div>

      <div className="checkout__right">
        <Subtotal></Subtotal>
      </div>
    </div>
  );
}

export default Checkout;

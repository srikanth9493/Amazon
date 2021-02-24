import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import Orderitem from "./Orderitem";
import "./OrderProduct.css";

function OrderProduct({ order }) {
  console.log("order__Product", order);
  return (
    <div className="order">
      <div className="order__main">
        <h2>Amount:{order.data?.amount}</h2>
        <h2>{new Date(order.data?.created * 1000).toLocaleString()}</h2>
        <div className="order__body">
          {order.data?.basket.map(({ desc, price, image, rating, id }) => (
            <Orderitem desc={desc} price={price} image={image}></Orderitem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderProduct;

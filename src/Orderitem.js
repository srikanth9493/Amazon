import React from "react";
import "./OrderItem.css";
function Orderitem({ desc, price, image, rating, id }) {
  return (
    <div className="ordername">
      <div className="ordername__body">
        <div className="ordername__img">
          <img src={image}></img>
        </div>
        <div className="ordername__detail">
          <div className="ordername__detail__des">{desc}</div>
          <div className="ordername__detail__price">
            <bold>{price} INR</bold>
          </div>

          <div className="ordername____rate"></div>
        </div>
      </div>
    </div>
  );
}

export default Orderitem;

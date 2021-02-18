import { Button } from "@material-ui/core";
import React from "react";
import "./CheckoutProduct.css";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({ desc, price, image, rating, id }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeProduct = () => {
    console.log("remove product");
    dispatch({
      type: actionTypes.REMOVE_FROM_PRODUCT,
      id: id,
    });
  };
  return (
    <div className="checkoutproduct">
      <div className="checkoutproduct__img">
        <img src={image}></img>
      </div>
      <div className="checkoutproduct__detail">
        <div className="checkoutproduct__detail__des">{desc}</div>
        <div className="checkoutproduct__detail__price">
          <bold>{price} INR</bold>
        </div>
        <div className="checkoutproduct__detail__button">
          <Button className="product__button__body" onClick={removeProduct}>
            {" "}
            Remove From Basket
          </Button>
        </div>
        <div className="checkoutproduct__detail__rate"></div>
      </div>
    </div>
  );
}

export default CheckoutProduct;

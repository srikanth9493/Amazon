import { Button } from "@material-ui/core";
import React from "react";
import "./Product.css";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
function Product({ desc, price, image, rating, id }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id: id,
        desc: desc,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <img className="product__img" src={image}></img>
      <span class="prodct__desc" dir="auto">
        {desc}
      </span>
      <div className="price">
        {price} <span>INR</span>
      </div>
      <div className="product__button__body">
        <Button className="product__button" onClick={addToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default Product;

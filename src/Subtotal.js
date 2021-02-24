import { Button, Checkbox } from "@material-ui/core";
import React from "react";
import "./Subtotal.css";
import { actionTypes, getBasketValue } from "./reducer";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  console.log("basket", basket);
  const processPayment = () => {};
  const history = useHistory();
  return (
    <div className="subtotal">
      <div className="subtotal__body">
        <p>
          sub total ({basket?.length})items :
          <strong>{getBasketValue(basket)}</strong>
        </p>
        <small>
          <input type="checkbox"></input> conatins gift items
        </small>
        <Button
          className="subtotal__button"
          onClick={() => history.push("/payment")}
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}

export default Subtotal;

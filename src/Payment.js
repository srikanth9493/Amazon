import React, { useEffect, useState } from "react";
import "./Payment.css";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button, Card, Fade } from "@material-ui/core";
import { getBasketValue } from "./reducer";
import axios from "./axios";
import { useHistory } from "react-router-dom";
import db from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const value = getBasketValue(basket);
  const history = useHistory();
  const [clietntSecret, setclietntSecret] = useState(true);

  const [disabled, setdisabled] = useState(true);
  const [processing, setprocessing] = useState(false);
  const [error, seterror] = useState(null);
  const [successed, setsuccessed] = useState(false);
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payment/create?total=${getBasketValue(basket)}`,
      });

      console.log("Responce data");
      setclietntSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    console.log("handle Submit...............................");
    e.preventDefault();
    setprocessing(true);

    const payload = await stripe
      .confirmCardPayment(clietntSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        console.log(paymentIntent);
        setprocessing(false);
        seterror(null);
        setsuccessed(true);
        console.log(
          "SUser details",
          basket,
          paymentIntent.amount,
          paymentIntent.created,
          paymentIntent.id
        );
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        dispatch({
          type: actionTypes.EMPTY_BASKET,
        });

        history.push("/");
      });

    //generate the special stripe secrt which allows us to charge a customer
  };
  const handleChanges = (e) => {
    setdisabled(e.empty);
    seterror(e.error ? e.error.message : "");
  };

  console.log("Client Secret is ", clietntSecret);
  return (
    <div className="payment">
      <div className="payment__body">
        <div className="payment__address">
          <div className="heading">
            <h2>Delivery Address</h2>
          </div>
          <div className="payment__address__details">
            <p>2-120/1,Back Side of Watertank</p>
            <p>Cheediga</p>
            <p>Kakinda</p>
          </div>
        </div>
        <div className="payment__products">
          <div className="heading">
            <h2>Orders</h2>
          </div>
          <div className="payment__products__details">
            {basket.map(({ desc, price, image, rating, id }) => (
              <CheckoutProduct
                image={image}
                desc={desc}
                id={id}
                price={price}
                rating={rating}
              ></CheckoutProduct>
            ))}
          </div>
        </div>

        <div className="payment__card">
          <div className="heading">
            <h1>Payment Details</h1>
          </div>
          <div className="payment__card__details">
            <form>
              <CardElement onChange={handleChanges}></CardElement>
              <h4>Order Total :{value} INR</h4>
              <button
                className="payment__card__button"
                disabled={processing || disabled || successed}
                type="submit"
                onClick={handleSubmit}
              >
                <span>{processing ? "Processing" : "Buynow"}</span>
              </button>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

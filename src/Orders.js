import React, { useEffect, useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import db from "./firebase";
import OrderProduct from "./OrderProduct";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Orders.css";
function Orders() {
  const [orders, setorders] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setorders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setorders([]);
    }
  }, [user]);
  console.log(orders, "ahi");

  return (
    <div className="orders">
      {orders?.map((order) => (
        <OrderProduct order={order}></OrderProduct>
      ))}
    </div>
  );
}

export default Orders;
{
  /* <CheckoutProduct
          price={price}
          desc={desc}
          image={image}
          id={id}
        ></CheckoutProduct> */
}
// { desc, price, image, rating, id }

import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import {} from "./reducer";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";
import Payment from "./Payment";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51IM9QXE4HnaBFpJTwLKVGmtsV2tRNKzyAYAPg6neP5tImuUvQIvhlLrQ7v34ZDQhhaweCwJOOJuWZGk6dvO3ApL500bEKD3LZG"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((auth) => {
      console.log("User....=>", auth);
      if (auth) {
        dispatch({
          type: actionTypes.SET_USER,
          user: auth,
        });
      } else {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/checkout">
            <Checkout></Checkout>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/orders">
            <Orders></Orders>
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment></Payment>
            </Elements>
          </Route>

          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

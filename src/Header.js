import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useHistory } from "react-router-dom";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log("User in Header", user);
  const name = user?.email.split("@")[0];
  const history = useHistory();

  const handleSignin = () => {
    if (user) {
      auth.signOut();
    }
  };
  let path = user ? "/checkout" : "/";
  console.log("path", path);
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"></img>
        </div>
      </Link>
      <div className="header__search">
        <input type="text"></input>
        <SearchIcon className="search__icon"></SearchIcon>
      </div>
      <div className="header__navbar">
        <Link to="/login">
          <div className="header__option" onClick={handleSignin}>
            <span className="headerOption_one">
              Hello {!user ? "Guest" : name}{" "}
            </span>
            <span className="headerOption_two">
              {user ? "Sign Out " : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__option" onClick={() => history.push("/orders")}>
          <span className="headerOption_one">Orders</span>
          <span className="headerOption_two">Refunds</span>
        </div>
        <div className="header__option">
          <span className="headerOption_one">Your </span>
          <span className="headerOption_two">Prime</span>
        </div>

        <Link to={user ? "/checkout" : "/login"}>
          <div className="header__basket">
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <span className="header__basket_count">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

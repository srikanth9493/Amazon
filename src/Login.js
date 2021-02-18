import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();

  const getLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
        console.log("authencation", auth);
      })
      .catch((error) => console.log(error));
  };

  const register = (e) => {
    console.log("Create User");
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((confirm) => {
        history.push("/");
        console.log("User Create ==>", confirm);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="login">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png    "></img>
      <div className="login__body">
        <form className="login__form">
          <h1>Sign In</h1>
          <lable>Email</lable>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="text"
          ></input>
          <lable>password</lable>
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
          ></input>
          By continuing, you agree to Amazon's Conditions of Use Privacy Notic
          <Button className="login__button" type="submit" onClick={getLogin}>
            Log In
          </Button>
          <Button className="login__create" type="submit" onClick={register}>
            Create you r new account
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;

const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IM9QXE4HnaBFpJTXjY9bGLGkOGUpIR8sGKkvUsOYlmHBjah3opnkctrMUieowkGfy3mbXaxg1SUOG61iBuEe88e00GUoJwLlO"
);

// app config
const app = express();
//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes

app.get("/call", (req, res) => {
  console.log("hello this isk reuest");
  res.status(200).send("Hello world");
});
app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment Request Received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen Commang
exports.api = functions.https.onRequest(app);

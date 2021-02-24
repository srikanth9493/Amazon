import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-fir-2f500.cloudfunctions.net/api",

  // "http://localhost:5001/fir-2f500/us-central1/api", //Cloud function Base URL
});

export default instance;

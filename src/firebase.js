import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDUNrikOjXWu_N1HDmKMrIQeWxI-BehZBA",
  authDomain: "fir-2f500.firebaseapp.com",
  projectId: "fir-2f500",
  storageBucket: "fir-2f500.appspot.com",
  messagingSenderId: "880698453190",
  appId: "1:880698453190:web:70e93b7b36fdf6d2267bc7",
  measurementId: "G-8XL32BFP97",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

// onst signIn = () => {
//   // auth.
//   auth
//     .signInWithPopup(provider)
//     .then((result) => console.log(result.user))
//     .catch((error) => alert(error));
// };

import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBgMHYDvteEEaHOUu_7_WpxypUM0h30nQ4",
  authDomain: "fir-381b9.firebaseapp.com",
  projectId: "fir-381b9",
  storageBucket: "fir-381b9.appspot.com",
  messagingSenderId: "936656391995",
  appId: "1:936656391995:web:e86a2a839fa7157c75311e",
  measurementId: "G-XQSH40KJKG",
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

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBn6Vrx_D53EJ4ViHOby-7BiQoZuoS-3RA",
  authDomain: "kolyska-shop.firebaseapp.com",
  projectId: "kolyska-shop",
  storageBucket: "kolyska-shop.appspot.com",
  messagingSenderId: "202488636642",
  appId: "1:202488636642:web:a54e5fa5d833783ec66abb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

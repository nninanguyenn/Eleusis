import React from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "./firebase.js";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const auth = getAuth();
    try {
      await auth.setPersistence(browserLocalPersistence);
      await signInWithPopup(auth, googleProvider);
      navigate("/home");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="loginButton">
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;

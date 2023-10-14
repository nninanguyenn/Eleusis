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
import { motion } from "framer-motion";

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
    <div className="container">
      <motion.div
      className="title"
      initial={{ y: "-60vh", opacity: 0}}
      animate={{ y: 0, opacity: 1}}
      transition={{ type: "tween", duration: 3.5 }}
      style={{ fontFamily: 'Julius Sans One'}}
      >
        Elusis
      </motion.div>
      <motion.div 
      className="loginButton"
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "tween", duration: 2 }}
      >

        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </motion.div>
    </div>
  );
};

export default Login;

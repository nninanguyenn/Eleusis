import React from "react";
import fox from './fox.PNG';
import tree1 from './tree_1.png';
import tree2 from './tree_2.png';
import abTree from './abstract_tree.png';
import speechb from './speech-bubble.png';
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
      animate={{ y: 0, opacity: 1, transition: { delay: 1.5 } }}
      transition={{ type: "tween", duration: 3.5 }}
      style={{ fontFamily: 'Julius Sans One', marginBottom: '20px'}}
      >
        Eleusis
      </motion.div>
      <motion.div 
      className="loginButton"
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "tween", duration: 2 }}
      >

        <motion.button className="red-button"
        whileHover={{ scale: 1.1, duration: .3 }}
        whileTap={{ scale: 0.9 }}

        onClick={signInWithGoogle}
        style={{ fontFamily: 'Julius Sans One'}}
        >
          Sign in with Google
        </motion.button>
      </motion.div>
      <motion.div 
      className="treeAb1"
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ type: "tween", duration: 2, delay: 2 }}
      >
        <img
          img src = {abTree}
          className="treeAbSize"
        />
      </motion.div>
      <motion.div 
      className="image-container"
      initial={{ x: "-60vh", opacity: 0}}
      animate={{ x: 0, opacity: 1}}
      transition={{ type: "tween", duration: 1.5, delay: 2.5 }}
      >
        <img
          img src = {fox}
          className="bottom-left-image"
        />
      </motion.div>
      <motion.div 
      className="tree1"
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ type: "tween", duration: 2, delay: 2 }}
      >
        <img
          img src = {tree1}
          className="top-tree-1"
        />
      </motion.div>
      <motion.div 
      className="tree2"
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ type: "tween", duration: 2, delay: 2 }}
      >
        <img
          img src = {tree2}
          className="top-tree-2"
        />
      </motion.div>
      <motion.div 
      className="speech"
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ type: "tween", duration: 2, delay: 4.5 }}
      >
        <img
          img src = {speechb}
          className="speech-bubble"
        />
      </motion.div>
    </div>
  );
};

export default Login;

import React from "react";
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from "./firebase.js"; // adjust the path
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase.js";
import './Login.css';


const Login = () => {
    const navigate = useNavigate();
    const signInWithGoogle = async () => {
        try {
          const result = await signInWithPopup(auth, googleProvider);
          // The signed-in user info can be obtained with result.user
          navigate('/home')
        } catch (error) {
          console.error(error.message);
        }
      };

    return (
    <div className="loginButton">
      <h1>Login</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;

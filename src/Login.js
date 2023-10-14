import React from "react";
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from "./firebase.js"; // adjust the path
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { auth, googleProvider } from "./firebase.js";
import { useUser } from './UserContext';

import './Login.css';


const db = getFirestore();

const Login = () => {
    const navigate = useNavigate();
    const { setUser } = useUser();

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            // Get user info
            const user = result.user;
            setUser(user);
            console.log(user);
            const email = user.email;
            const uid = user.uid;
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

import React, { useState } from "react";

import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from "./firebase.js"; // adjust the path
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, addDoc, collection } from "firebase/firestore";
import { auth, googleProvider, db} from "./firebase.js";
import { useUser } from './UserContext';

import './Login.css';



const Login = () => {
    const navigate = useNavigate();
    const { setUser } = useUser();
    const [isPromptingForName, setIsPromptingForName] = useState(false);
    const [name, setName] = useState('');

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            const uid = user.uid;
            const userDocRef = doc(getFirestore(), 'users', uid);
            const userDocSnap = await getDoc(userDocRef);
      
            if (userDocSnap.exists()) {
              // User doesn't exist in Firestore, prompt for a name
              setUser(userDocSnap.data());

            } else {
                setUser({uid: uid, email: user.email});
            }
            navigate('/home');
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

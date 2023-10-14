import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { useUser } from './UserContext';
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";


const Home = () => {
    const { user, setUser } = useUser();
    const [isPromptingForName, setIsPromptingForName] = useState(!user.name);
    const [name, setName] = useState('');
    const navigate = useNavigate();

const handleNameSubmit = async () => {
        if (name) {
            const userDocRef = doc(getFirestore(), 'users', getAuth().currentUser.uid);
            await setDoc(userDocRef, { name: name, email: getAuth().currentUser.email }, { merge: true });

            const userDocSnap = await getDoc(userDocRef);
            setUser(userDocSnap.data());

            setIsPromptingForName(false);
        }
    };

    return (
        <div className="background">
            {isPromptingForName ? (
                <div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                    <button onClick={handleNameSubmit}>Submit</button>
                </div>
            ) : (
                <>Welcome home, {user.name}!</>
            )}
        </div>
    );
};

export default Home;
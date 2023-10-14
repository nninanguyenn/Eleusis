import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { useUser } from "./UserContext";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import QuestionComponent from "./QuestionComponent";

const Home = () => {
  const { user, setUser } = useUser();
  const [isPromptingForName, setIsPromptingForName] = useState(null);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setIsPromptingForName(!user.name);
    }
  }, [user]);

  const handleNameSubmit = async () => {
    if (name) {
      const userDocRef = doc(
        getFirestore(),
        "users",
        getAuth().currentUser.uid
      );
      await setDoc(
        userDocRef,
        { name: name, email: getAuth().currentUser.email },
        { merge: true }
      );

      const userDocSnap = await getDoc(userDocRef);
      setUser(userDocSnap.data());

      setIsPromptingForName(false);
    }
  };

  if (isPromptingForName === null) {
    return <div>Loading...</div>; // or your preferred loading indicator
  }

  return (
    <div className="background">
      {isPromptingForName ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <button onClick={handleNameSubmit}>Submit</button>
        </div>
      ) : (
        <div>
        <>Welcome home, {user.name}!</>
        <QuestionComponent />
        </div>
      )}
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { useUser } from "./UserContext";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import QuestionComponent from "./QuestionComponent";
import QuestionList from "./QuestionList";
import Graph from "./Graph";
import { questions } from "./Questions";
import { motion } from "framer-motion";
import { db, auth } from "./firebase"

const Home = () => {
  const { user, setUser } = useUser();
  const [isPromptingForName, setIsPromptingForName] = useState(null);
  const [name, setName] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [endOfQuestions, setEndOfQuestions] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setIsPromptingForName(!user.name);
    }
  }, [user]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
        setEndOfQuestions(true);
    }
};

  const handleNameSubmit = async () => {
    if (name) {
      const userDocRef = doc(
        db,
        "users",
        auth.currentUser.uid
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
      ) : endOfQuestions ? (
        // You can render some other content here, like a thank you message, results, etc.

        <div className = "mood">your mood today is:
        <motion.div 
        className="pastEntriesButton"
        initial={{x: -240, y: "100vh" }}
        animate={{ x: -240, y: "65vh" }}
        transition={{ type: "tween", duration: 2 }}
        >

          <button className="green-button" 
          style={{ fontFamily: 'Julius Sans One'}}
          >
            view your past entries
          </button>
      </motion.div>
        <Graph userId={auth.currentUser.uid} />

        </div>
      ) : (
        <div>
          <QuestionList questions={questions} onNext={handleNextQuestion} currentQuestionIndex={currentQuestionIndex} />
        </div>
      )}
    </div>
  );
};

export default Home;
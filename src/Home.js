import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { useUser } from "./UserContext";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import QuestionComponent from "./QuestionComponent";
import QuestionList from "./QuestionList";
import Graph from "./Graph";
import ResponseComponent from "./ResponseComponent";

import { questions } from "./Questions";
import { motion } from "framer-motion";
import { db, auth } from "./firebase"

const Home = () => {
  const { user, setUser } = useUser();
  const [isPromptingForName, setIsPromptingForName] = useState(null);
  const [name, setName] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [endOfQuestions, setEndOfQuestions] = useState(false);
  const [userResponse, setUserResponse] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDocId, setCurrentDocId] = useState(null);

  const navigate = useNavigate();


  const handleResponseSelected = () => {
      setIsModalOpen(true);  // Open the modal when a response is selected
  };


  useEffect(() => {
    if (user) {
      setIsPromptingForName(!user.name);
    }
  }, [user]);

  const handleNextQuestion = () => {
    console.log("handleNextQuestion called, current index:", currentQuestionIndex);
    if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
        setEndOfQuestions(true);
    }
};

  const handleResponseSubmit = async () => {
    console.log('userResponse:', userResponse);
    console.log('currentDocId:', currentDocId);
    if (userResponse && currentDocId) {
      console.log("Hi");
      const datePlayed = new Date().toISOString().slice(0, 10);  // Define datePlayed
      const responseDocRef = doc(
        db,
        "users",
        auth.currentUser.uid,
        "PlayedDates",
        datePlayed,
        "Responses",
        currentDocId
      );
      await updateDoc(responseDocRef, {
        reason: userResponse
      });
      setUserResponse("");  // Clear the user response field
      handleNextQuestion();  // Move on to the next question
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
        initial={{x: 0, y: "100vh" }}
        animate={{ x: 0, y: "45vh" }}
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
          <QuestionList questions={questions} onNext={handleResponseSelected} currentQuestionIndex={currentQuestionIndex} setCurrentDocId={setCurrentDocId}/>
          <ResponseComponent 
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                userResponse={userResponse}
                setUserResponse={setUserResponse}
                handleResponseSubmit={handleResponseSubmit}
            />
        </div>
      )}
    </div>
  );
};

export default Home;
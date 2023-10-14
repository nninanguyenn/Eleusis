import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { useUser } from "./UserContext";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import QuestionComponent from "./QuestionComponent";
import QuestionList from "./QuestionList";
import { questions } from "./Questions";

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
        <div>Thank you for answering the questions!</div>
      ) : (
        <div>
          <QuestionList questions={questions} onNext={handleNextQuestion} currentQuestionIndex={currentQuestionIndex} />
        </div>
      )}
    </div>
  );
};

export default Home;

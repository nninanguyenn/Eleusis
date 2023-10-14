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
import tree1 from './tree_1.png';
import tree2 from './tree_2.png';
import fox from './fox.png';
import abTree from './abstract_tree.png';

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
          <div>
          <motion.div
            className="title"
            initial={{ y: "-60vh", opacity: 0}}
            animate={{ y: 0, opacity: 1, transition: { delay: 3 } }}
            transition={{ type: "tween", duration: 3.5 }}
            style={{ fontFamily: 'Julius Sans One', marginBottom: '20px'}}
        > What is your name? 
        </motion.div>
          <div className="nameInput"
            style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%"
            }}>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Here"
            />
            <button onClick={handleNameSubmit}>Submit
            </button>
          </div>
          <motion.div 
      className="treeAb1"
      initial={{ opacity: 1}}
      animate={{ opacity: 0}}
      transition={{ type: "tween", duration: 2, delay: 1 }}
      >
        <img
          img src = {abTree}
          className="treeAbSize"
        />
      </motion.div>
      <motion.div 
      className="image-container"
      initial={{ opacity: 1}}
      animate={{ opacity: 0}}
      transition={{ type: "tween", duration: 2, delay: 1 }}
      >
        <img
          img src = {fox}
          className="bottom-left-image"
        />
      </motion.div>
      <motion.div 
      className="tree1"
      initial={{ opacity: 1}}
      animate={{ opacity: 0}}
      transition={{ type: "tween", duration: 2, delay: 2 }}
      >
        <img
          img src = {tree1}
          className="top-tree-1"
        />
      </motion.div>
      <motion.div 
      className="tree2"
      initial={{ opacity: 1}}
      animate={{ opacity: 0}}
      transition={{ type: "tween", duration: 2, delay: 2 }}
      >
        <img
          img src = {tree2}
          className="top-tree-2"
        />
      </motion.div>
        </div>
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

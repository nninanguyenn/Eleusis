import React, { useState } from "react";
import { auth, db } from "./firebase";
import {
  getFirestore,
  doc,
  collection,
  addDoc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useUser } from "./UserContext";
import "./QuestionComponent.css";

const defaultFlags = {
  happy: 0,
  calm: 0,
  frustrated: 0,
  anxious: 0,
  neutral: 0,
  aggressive: 0,
  motivated: 0,
  sad: 0,
};

const QuestionComponent = ({ question, index, className, onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const user = useUser();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextClick = async () => {
    if (selectedOption) {
        const now = new Date();
        const datePlayed = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
        const userPlayedDateRef = doc(
        db,
        "users",
        auth.currentUser.uid,
        "PlayedDates",
        datePlayed
      );

      // Check if this date document already exists
      const dateDoc = await getDoc(userPlayedDateRef);
      if (!dateDoc.exists()) {
        // If not, set the default flags for that date
        await setDoc(userPlayedDateRef, { flags: defaultFlags });
      }

      // Save the question-answer in a sub-collection called "Responses"
      const userQuestionsRef = collection(userPlayedDateRef, "Responses");
      await addDoc(userQuestionsRef, {
        question: question,
        answer: selectedOption,
      });

      // Update the flags based on selected option
      if (selectedOption.flags && selectedOption.flags.length) {
        let updates = {};
        let currentFlags = dateDoc.data()?.flags || {}; // Safe navigation with ?.

        selectedOption.flags.forEach((f) => {
          if (currentFlags && currentFlags[f] !== undefined) {
            // Additional check for the flag
            updates[`flags.${f}`] = currentFlags[f] + 1;
          } else {
            updates[`flags.${f}`] = 1; // In case the flag doesn't exist yet
          }
        });
        await updateDoc(userPlayedDateRef, updates);
      }

      onNext();
    } else {
      // Handle case where an answer isn't selected if required
    }
  };

  return (
    <div className={`questionContainer ${className}`}>
      <div className="questionHeader">
        <div>
          <span> {index + 1} / 11</span>
          <p>{question.description}</p>
        </div>
      </div>
      <div className="designRegion">{/* Your design content goes here */}</div>
      <div className="responseButtons">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`responseOption ${
              selectedOption === option ? "selected" : ""
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option.description}
          </button>
        ))}
      </div>
      <button className="doneButton" onClick={handleNextClick}>
        NEXT
      </button>
    </div>
  );
};

export default QuestionComponent;
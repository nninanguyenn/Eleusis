import React, { useState } from 'react';
import { auth, db } from './firebase';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useUser } from './UserContext';


import './QuestionComponent.css';


const QuestionComponent = ({ question, index, className, onNext }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const user = useUser();

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleNextClick = async () => {
        if (selectedOption) {
            // Save the data to Firebase here
            const datePlayed = new Date().toISOString().slice(0,10); // get current date in format YYYY-MM-DD
            const userQuestionsRef = collection(db, 'users', auth.currentUser.uid, 'PlayedDates', datePlayed, 'Questions');
            await addDoc(userQuestionsRef, {
                question: question,
                answer: selectedOption
            });
            onNext();
        } else {
            // Handle case where an answer isn't selected if required
            alert("Please select an option before proceeding.");
        }
    };
    
    return (
        <div className={`questionContainer ${className}`}>
            <div className="questionHeader">
                <div>
                    <span> {index+1} / 12</span>
                    <p>{question.description}</p>
                </div>
            </div>
            <div className="designRegion">
                {/* Your design content goes here */}
            </div>
            <div className="responseButtons">
                {question.options.map((option, index) => (
                <button 
                   key={index} 
                   className={`responseOption ${selectedOption === option ? 'selected' : ''}`} 
                   onClick={() => handleOptionClick(option)}>
                   {option}
                </button>
            ))}
            </div>
            <button className="doneButton" onClick={handleNextClick}>NEXT</button>
                    </div>
    );
}

export default QuestionComponent;
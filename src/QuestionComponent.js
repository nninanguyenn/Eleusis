import React from 'react';
import './QuestionComponent.css';

const QuestionComponent = ({ question, index, className, onNext }) => {
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
                    <button key={index} className="responseOption">{option}</button>
                ))}
            </div>
            <button className="doneButton" onClick={onNext}>NEXT</button>
        </div>
    );
}

export default QuestionComponent;
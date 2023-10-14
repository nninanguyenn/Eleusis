import React from 'react';
import './QuestionComponent.css';

export const QuestionComponent = () => {
    return (
        <div className="questionContainer">
            <div className="questionHeader">
                <div>
                    <span>01 / 12</span>
                    <p>You find yourself waking up on a train...</p>
                </div>
            </div>
            <div className="designRegion">
                {/* Your design content goes here */}
            </div>
            <div className="responseButtons">
                <button className="responseOption">not think about where the next stop is, and embrace the excitement of the unknown.</button>
                <button className="responseOption">look for the route map, and find out where the train is heading.</button>
            </div>
            <button className="doneButton">NEXT</button>
        </div>
    );
}

export default QuestionComponent;

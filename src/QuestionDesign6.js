import React from 'react';
import './QuestionDesign6.css';
import flower from './flower.png';
import pancake from './pancake.png';

function QuestionDesign6() {
    return (
        <div className="design-6-container">
            <div className="flower">
                <img
                    img src={flower} 
                    className="flower-size"
                />
            </div>
            <div className="pancake">
                <img
                    img src={pancake} 
                    className="pancake-size"
                />
            </div>
        </div>
    );
}

export default QuestionDesign6;
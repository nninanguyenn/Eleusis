import React from 'react';
import './QuestionDesign3.css';
import fight from './fight.png';

function QuestionDesign3() {
    return (
        <div className="design-3-container">
            <div className="fight"
            style={{
                paddingTop: "75px",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <img
                    img src={fight} 
                    className="fight-size"
                    />
            </div>
        </div>
    );
}

export default QuestionDesign3;
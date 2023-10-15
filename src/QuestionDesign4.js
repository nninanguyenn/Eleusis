import React from 'react';
import './QuestionDesign4.css';
import house1 from './house1.png';
import house2 from './house2.png';

function QuestionDesign4() {
    return (
        <div className="design-4-container">
            <div className="house1">
                <img
                    img src={house1} 
                    className="big-house-size"
                    />
            </div>
            <div className="house2">
                <img
                    img src={house2} 
                    className="small-house-size"
                    />
            </div>
        </div>
    );
}

export default QuestionDesign4;
import React from 'react';
import './QuestionDesign10.css';
import alfred from "./Alfred.PNG";
import water from "./water.webp";


function QuestionDesign10() {
    return (
        <div className='images'
            style={{ 
            paddingLeft: "120px",
            paddingTop: "25px",
            alignItems: "center",
            justifyContent: "center"}}
        >
            <img
                img src={alfred} 
                alt="alfred10"
                className="alfred10-Size"
            />
            <img
                img src = {water}
                alt="water"
                className="water-Size"
            />
        </div>
    );
}

export default QuestionDesign10;
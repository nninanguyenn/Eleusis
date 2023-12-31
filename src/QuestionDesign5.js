import React from 'react';
import './QuestionDesign5.css';
import alfred from "./Alfred.PNG";
import fence from "./Fence.PNG";
import house from "./house1.png";


function QuestionDesign5() {
    return (
        <div className='images'
            style={{ 
            alignItems: "center",
            justifyContent: "center"}}
        >
        <img
            img src={alfred} 
            alt="alfred5"
            className="alfred5-Size"
            />
         <img
            img src={fence} 
            alt="fence1"
            className="fence1-Size"
            />
        <img
            img src={house} 
            alt="house"
            className="house-Size"
            />
         <img
            img src={fence} 
            alt="fence2"
            className="fence2-Size"
            />
        </div>
    );
}

export default QuestionDesign5;
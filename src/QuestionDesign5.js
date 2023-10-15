import React from 'react';
import './QuestionDesign5.css';
import alfred from "./Alfred.PNG";
import fence from "./Fence.PNG";
import house from "./House.PNG";


function QuestionDesign5() {
    return (
        <div className='images'
            style={{ 
            paddingTop: "75px",
            alignItems: "center",
            justifyContent: "center"}}
        >
        <img
            img src={alfred} 
            alt="alfred"
            className="alfred-Size"
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
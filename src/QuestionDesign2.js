import React from 'react';
import './QuestionDesign2.css';
import fox from './fox.PNG';
import bunny from './Bunny.PNG';
import bear from './Bear.PNG';

function QuestionDesign2() {
    return (
        <div className='images'
            style={{ 
            paddingTop: "75px",
            alignItems: "center",
            justifyContent: "center"}}
        >
         <img
            img src={bunny} 
            alt="bunny"
            className="bunny-Size"
            />
        <img
            img src={fox} 
            alt="fox"
            className="fox-Size"
            />
        <img
            img src={bear} 
            alt="bear"
            className="bear-Size"
            />
        </div>
    );
}

export default QuestionDesign2;
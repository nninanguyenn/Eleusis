import React from 'react';
import './QuestionDesign2.css';
import fox from './fox.png';
import bunny from './Bunny.PNG';
import bear from './Bear.PNG';
import { motion } from "framer-motion";

function QuestionDesign1() {
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
            alt="Design for question 2"
            className="bear-Size"
            />
        </div>
    );
}

export default QuestionDesign1;
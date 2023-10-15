import React from 'react';
import './QuestionDesign7.css';
import cup from './good-cup.png';
import badcup from './bad-cup.png';
import { motion } from "framer-motion";

function QuestionDesign7() {
    return (
        <div className='images'
            style={{ 
            alignItems: "center",
            justifyContent: "center"}}
        >
         <img
            img src={cup} 
            alt="cups"
            className="cups-Size"
            />
        <img
            img src={badcup} 
            alt="badcup"
            className="badcup-Size"
            />
        </div>
    );
}

export default QuestionDesign7;
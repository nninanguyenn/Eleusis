import React from 'react';
import './QuestionDesign8.css';
import cup from './good-cup.png';
import badcup from './bad-cup.png';
import { motion } from "framer-motion";

function QuestionDesign8() {
    return (
        <div className='images'
            style={{ 
            alignItems: "center",
            justifyContent: "center"}}
        >
         <img
            img src={cup} 
            alt="cup"
            className="cup-Size"
            />
        </div>
    );
}

export default QuestionDesign8;
import React from 'react';
import './QuestionDesign9.css';
import pond from './pond.png';
import ocean from './ocean.png';
import { motion } from "framer-motion";

function QuestionDesign9() {
    return (
        <div className='images'
            style={{ 
            alignItems: "center",
            justifyContent: "center"}}
        >
        <div className="pond">
         <img
            img src={pond} 
            alt="pond"
            className="pond-Size"
            />
        </div>
        <div className="ocean">
        <img
            img src={ocean} 
            alt="ocean"
            className="ocean-Size"
            />
        </div>
        </div>
    );
}

export default QuestionDesign9;
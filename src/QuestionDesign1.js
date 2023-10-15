import React from 'react';
import './QuestionDesign1.css';
import { motion } from "framer-motion";
import alfred from './Alfred.PNG';
import tree1 from './tree_1.png'
import tree2 from './tree_2.png'
import lover from './Alfred_Lover.PNG'
import family from './Alfreds_Family.PNG'

function QuestionDesign1() {
    return (
        <div className="design-1-container">
            <motion.div 
            className="alfred"
            animate={{ x: [5, 15, 5]}}
            transition={{ repeat: Infinity, duration: 2 }}>
                <img
                    img src={alfred} 
                    alt="Design for question 1"
                    className="alfred-Size"
                    />
                {/* Any other JSX elements or logic specific to this design */}
            </motion.div>
            <div className="tree_1">
                <img
                    img src={tree1} 
                    className="tree1-size"
                    />
                {/* Any other JSX elements or logic specific to this design */}
            </div>
            <div className="tree_2">
                <img
                    img src={tree2} 
                    className="tree2-size"
                    />
                {/* Any other JSX elements or logic specific to this design */}
            </div>
            <motion.div 
            className="lover-container"
            animate={{ x: [5, 15, 5]}}
            transition={{ repeat: Infinity, duration: 2 }}>
                <img
                    img src={alfred} 
                    className="alf"
                    />
                <img
                    img src={lover}
                    className="lover"
                    />
            </motion.div>
            <motion.div 
            className="family-container"
            animate={{ x: [5, 15, 5]}}
            transition={{ repeat: Infinity, duration: 2 }}>
                <img
                    img src={family}
                    className="family"
                />
            </motion.div>
        </div>
    );
}

export default QuestionDesign1;
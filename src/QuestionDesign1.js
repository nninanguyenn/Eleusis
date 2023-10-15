import React from 'react';
import './QuestionDesign1.css';
import alfred from './Alfred.PNG';
import tree1 from './tree_1.png'
import tree2 from './tree_2.png'
import lover from './Alfred_Lover.PNG'
import family from './Alfreds_Family.PNG'

function QuestionDesign1() {
    return (
        <div className="container">
            <div className="alfred">
                <img
                    img src={alfred} 
                    alt="Design for question 1"
                    className="alfred-Size"
                    />
                {/* Any other JSX elements or logic specific to this design */}
            </div>
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
            <div className="lover-container">
                <img
                    img src={alfred} 
                    className="alf"
                    />
                <img
                    img src={lover}
                    className="lover"
                    />
            </div>
            <div className="family-container">
                <img
                    img src={family}
                    className="family"
                />
            </div>
        </div>
    );
}

export default QuestionDesign1;
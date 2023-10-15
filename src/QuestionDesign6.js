import React from 'react';
import './QuestionDesign6.css';
import flower from './flower.png';
import pancake from './pancake.png';
import table from './table.png';
import ppl from './Alfred.PNG';

function QuestionDesign6() {
    return (
        <div className="design-6-container">
            <div className="objects"    
                style={{
                alignItems: "center",
                justifyContent: "center"
            }}>
                <img
                    img src={flower} 
                    alt="flower"
                    className="flower-size"
                />
                <img
                    img src={pancake} 
                    alt="pancake"
                    className="pancake-size"
                />
                <img
                    img src={ppl} 
                    alt="ppl"
                    className="ppl-size"
                />
            </div>
            <div className="table" >
                <img
                    img src={table} 
                    className="table-size"
                />
            </div>
        </div>
    );
}

export default QuestionDesign6;
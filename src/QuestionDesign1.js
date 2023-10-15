import React from 'react';
import './QuestionDesign1.css';
import alfred from './Alfred.PNG';

function QuestionDesign1() {
    return (
        <div>
            <div className='alfred'>
                <img
                    img src={alfred} 
                    alt="Design for question 1"
                    className="alfred-Size"
                    />
                {/* Any other JSX elements or logic specific to this design */}
            </div>
        </div>
    );
}

export default QuestionDesign1;
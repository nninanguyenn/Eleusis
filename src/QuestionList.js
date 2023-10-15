import React from 'react';
import QuestionComponent from './QuestionComponent';

const QuestionList = ({ questions, onNext, currentQuestionIndex }) => {
    return (
        <div>
            <QuestionComponent
                question={questions[currentQuestionIndex]}
                index={currentQuestionIndex}
                className="question active"
                onNext={onNext}
            />
        </div>
    );
};

export default QuestionList;
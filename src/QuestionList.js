import React from "react";
import QuestionComponent from "./QuestionComponent";

const QuestionList = ({ questions, onNext, currentQuestionIndex,  setCurrentDocId }) => {
  return (
    <div>
      <QuestionComponent
        question={questions[currentQuestionIndex]}
        index={currentQuestionIndex}
        className="question active"
        onNext={onNext}
        setCurrentDocId={setCurrentDocId}
      />
    </div>
  );
};

export default QuestionList;

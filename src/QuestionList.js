import React from "react";
import QuestionComponent from "./QuestionComponent";

const QuestionList = ({
  questions,
  onNext,
  currentQuestionIndex,
  setIsOptionSelected,
}) => {
  return (
    <div>
      <QuestionComponent
        question={questions[currentQuestionIndex]}
        index={currentQuestionIndex}
        className="question active"
        onNext={onNext}
        setIsOptionSelected={setIsOptionSelected}
      />
    </div>
  );
};

export default QuestionList;

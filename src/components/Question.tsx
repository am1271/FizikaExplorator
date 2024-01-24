import React, { useState, useEffect } from "react";

interface QuestionProps {
  questionData: {
    question: string;
    options: string[];
    correctAnswer: string;
  };
  onAnswerSelected: (selectedAnswer: string) => void;
  onNextQuestion: () => void;
}

const Question: React.FC<QuestionProps> = ({
  questionData,
  onAnswerSelected,
  onNextQuestion,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  //resetiraj odabranu opciju kad ideš na sljedeće pitanje
  useEffect(() => {
    setSelectedOption(null);
  }, [questionData]);

  //postavi odabran odgovor
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onAnswerSelected(option);
  };

  return (
    <div className="container">
      <div className="bg-light w-75 mx-auto p-3 border rounded mt-2">
        <div className="mb-4">
          <h3 className="text-center">{questionData.question}</h3>
        </div>
        <ul className="list-unstyled">
          {questionData.options.map((option, index) => (
            <li key={index} className="mb-2">
              <button
                onClick={() => handleOptionClick(option)}
                className={`btn btn-block ${
                  selectedOption === option
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                style={{ border: "1px solid #ccc" }}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
        <div className="d-flex justify-content-end mt-4">
          <button
            className="btn btn-outline-success"
            onClick={onNextQuestion}
            disabled={!selectedOption}
          >
            Sljedeće pitanje
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;

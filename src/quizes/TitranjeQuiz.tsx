import React, { useState } from "react";
import Question from "../components/Question";
import TitranjeQuizData from "../data/TitranjeQuizData.json";

const TitranjeQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const handleAnswerSelected = (selectedAnswer: string) => {
    setUserAnswers([...userAnswers, selectedAnswer]);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const calculateCorrectAnswers = () => {
    const correctAnswers = userAnswers.filter(
      (answer, index) => answer === TitranjeQuizData[index].correctAnswer
    ).length;

    return correctAnswers;
  };

  const renderSelectedAnswers = () => (
    <div>
      <br />
      <h3>Rezultati kviza:</h3>
      {userAnswers.map((selectedAnswer, index) => (
        <div key={index}>
          <p>
            Odgovor {index + 1}: {selectedAnswer}{" "}
            {selectedAnswer === TitranjeQuizData[index].correctAnswer ? (
              <span style={{ color: "green" }}> (Točno)</span>
            ) : (
              <span style={{ color: "red" }}> (Netočno)</span>
            )}
          </p>
        </div>
      ))}
      <b>
        Točno odgovoreno: {calculateCorrectAnswers()} /{" "}
        {TitranjeQuizData.length}
      </b>
    </div>
  );

  return (
    <div>
      {currentQuestion < TitranjeQuizData.length ? (
        <Question
          questionData={TitranjeQuizData[currentQuestion]}
          onAnswerSelected={handleAnswerSelected}
          onNextQuestion={handleNextQuestion}
        />
      ) : (
        <div>{renderSelectedAnswers()}</div>
      )}
    </div>
  );
};

export default TitranjeQuiz;

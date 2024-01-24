import React, { useState } from "react";
import Question from "../components/Question";
import TermodinamikaQuizData from "../data/TermodinamikaQuizData.json";

const TermodinamikaQuiz: React.FC = () => {
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
      (answer, index) => answer === TermodinamikaQuizData[index].correctAnswer
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
            {selectedAnswer === TermodinamikaQuizData[index].correctAnswer ? (
              <span style={{ color: "green" }}> (Točno)</span>
            ) : (
              <span style={{ color: "red" }}> (Netočno)</span>
            )}
          </p>
        </div>
      ))}
      <b>
        Točno odgovoreno: {calculateCorrectAnswers()} /{" "}
        {TermodinamikaQuizData.length}
      </b>
    </div>
  );

  return (
    <div>
      {currentQuestion < TermodinamikaQuizData.length ? (
        <Question
          questionData={TermodinamikaQuizData[currentQuestion]}
          onAnswerSelected={handleAnswerSelected}
          onNextQuestion={handleNextQuestion}
        />
      ) : (
        <div>{renderSelectedAnswers()}</div>
      )}
    </div>
  );
};

export default TermodinamikaQuiz;

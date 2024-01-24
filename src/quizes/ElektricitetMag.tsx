import React, { useState } from "react";
import Question from "../components/Question";
import ElektricitetMagQuizData from "../data/ElektricitetMagQuizData.json";

const ElektricitetMagQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const handleAnswerSelected = (selectedAnswer: string) => {
    setUserAnswers([...userAnswers, selectedAnswer]);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  //usporedi unesene opdatke s točnima i orebroji koliko ih ima
  const calculateCorrectAnswers = () => {
    const correctAnswers = userAnswers.filter(
      (answer, index) => answer === ElektricitetMagQuizData[index].correctAnswer
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
            {selectedAnswer === ElektricitetMagQuizData[index].correctAnswer ? (
              <span style={{ color: "green" }}> (Točno)</span>
            ) : (
              <span style={{ color: "red" }}> (Netočno)</span>
            )}
          </p>
        </div>
      ))}
      <b>
        Točno odgovoreno: {calculateCorrectAnswers()} /{" "}
        {ElektricitetMagQuizData.length}
      </b>
    </div>
  );

  return (
    <div>
      {currentQuestion < ElektricitetMagQuizData.length ? (
        <Question
          questionData={ElektricitetMagQuizData[currentQuestion]}
          onAnswerSelected={handleAnswerSelected}
          onNextQuestion={handleNextQuestion}
        />
      ) : (
        <div>{renderSelectedAnswers()}</div>
      )}
    </div>
  );
};

export default ElektricitetMagQuiz;

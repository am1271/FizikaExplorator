import { useState } from "react";
import OsnoveGibanjaQuiz from "../quizes/OsnoveGibanjaQuiz";
import ToplinaQuiz from "../quizes/ToplinaQuiz";
import ElektromagnetizamQuiz from "../quizes/ElektromagnetizamQuiz";
import ValoviSvjetlostQuiz from "../quizes/ValoviSvjetlostQuiz";
import MehanikaQuiz from "../quizes/MehanikaQuiz";
import TermodinamikaQuiz from "../quizes/TermodinamikaQuiz";
import ElektricitetMagQuiz from "../quizes/ElektricitetMag";
import TitranjeQuiz from "../quizes/TitranjeQuiz";
import ModernaFizikaQuiz from "../quizes/ModernaFizikaQuiz";
import "./Quiz.css";

//data za kvizove
const osnovnaSkolaQuizzes = [
  {
    id: 1,
    title: "Osnove gibanja",
    component: <OsnoveGibanjaQuiz />,
    backgroundImage: "../imgs/Osnove gibanja.jpg",
  },
  {
    id: 2,
    title: "Toplina i unutarnja energija",
    component: <ToplinaQuiz />,
    backgroundImage: "../imgs/Unutarnja energija.jpg",
  },
  {
    id: 3,
    title: "Električna struja",
    component: <ElektromagnetizamQuiz />,
    backgroundImage: "/imgs/Elektromagnetizam3.jpg",
  },
  {
    id: 4,
    title: "Valovi i svjetlost",
    component: <ValoviSvjetlostQuiz />,
    backgroundImage: "/imgs/Valovi i svjetlost.jpg",
  },
];

const srednjaSkolaQuizzes = [
  {
    id: 1,
    title: "Mehanika",
    component: <MehanikaQuiz />,
    backgroundImage: "../imgs/Mehanika.jpg",
  },
  {
    id: 2,
    title: "Termodinamika",
    component: <TermodinamikaQuiz />,
    backgroundImage: "/imgs/Termodinamika.jpg",
  },
  {
    id: 3,
    title: "Elektricitet i magnetizam",
    component: <ElektricitetMagQuiz />,
    backgroundImage: "/imgs/Elektricitet i magnetizam.jpg",
  },
  {
    id: 4,
    title: "Titranje, valovi i optika",
    component: <TitranjeQuiz />,
    backgroundImage: "/imgs/Titanje i optika.jpg",
  },
  {
    id: 5,
    title: "Moderna fizika",
    component: <ModernaFizikaQuiz />,
    backgroundImage: "/imgs/Moderna fizika.jpg",
  },
];

export function Quiz() {
  const [selectedOsnovnaSkolaQuiz, setSelectedOsnovnaSkolaQuiz] = useState<
    number | null
  >(null);
  const [selectedSrednjaSkolaQuiz, setSelectedSrednjaSkolaQuiz] = useState<
    number | null
  >(null);

  const handleOsnovnaSkolaQuizButtonClick = (quizId: number) => {
    setSelectedOsnovnaSkolaQuiz(quizId);
    setSelectedSrednjaSkolaQuiz(null); // Reset srednja skola quiz selection
  };

  const handleSrednjaSkolaQuizButtonClick = (quizId: number) => {
    setSelectedSrednjaSkolaQuiz(quizId);
    setSelectedOsnovnaSkolaQuiz(null); // Reset osnovna skola quiz selection
  };

  const handleBackClick = () => {
    setSelectedOsnovnaSkolaQuiz(null);
    setSelectedSrednjaSkolaQuiz(null);
  };

  const renderOsnovnaSkolaQuizButton = (quiz: {
    id: number;
    title: string;
    backgroundImage: string;
  }) => (
    <button
      key={quiz.id}
      className={`btn btn-outline-light btn-lg bg-cover col-12 col-md-6 col-lg-4 `}
      style={{ backgroundImage: `url("${quiz.backgroundImage}")` }}
      onClick={() => handleOsnovnaSkolaQuizButtonClick(quiz.id)}
    >
      <div className="overlay ">{quiz.title} kviz</div>
    </button>
  );

  const renderSrednjaSkolaQuizButton = (quiz: {
    id: number;
    title: string;
    backgroundImage: string;
  }) => (
    <button
      key={quiz.id}
      className={`btn btn-outline-light btn-lg bg-cover col-12 col-md-6 col-lg-4 `}
      style={{ backgroundImage: `url("${quiz.backgroundImage}")` }}
      onClick={() => handleSrednjaSkolaQuizButtonClick(quiz.id)}
    >
      <div className="overlay ">{quiz.title} kviz</div>
    </button>
  );

  return (
    <div className="container">
      <div className="os-quizes">
        <h2 className="text-center">Kvizovi za osnovnu školu</h2>
        {selectedOsnovnaSkolaQuiz !== null ? (
          <div>
            <button
              className="btn btn-outline-danger"
              onClick={handleBackClick}
            >
              Povratak
            </button>
            {osnovnaSkolaQuizzes[selectedOsnovnaSkolaQuiz - 1].component}
          </div>
        ) : (
          <div className="row">
            {osnovnaSkolaQuizzes.map(renderOsnovnaSkolaQuizButton)}
          </div>
        )}
      </div>
      <br />
      <div className="ss-quizes">
        <h2 className="text-center">Kvizovi za srednju školu</h2>
        {selectedSrednjaSkolaQuiz !== null ? (
          <div>
            <button
              className="btn btn-outline-danger"
              onClick={handleBackClick}
            >
              Povratak
            </button>
            {srednjaSkolaQuizzes[selectedSrednjaSkolaQuiz - 1].component}
          </div>
        ) : (
          <div className="row">
            {srednjaSkolaQuizzes.map(renderSrednjaSkolaQuizButton)}
          </div>
        )}
      </div>
    </div>
  );
}

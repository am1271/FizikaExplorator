import React from "react";
import { Link } from "react-router-dom";

interface LessonCardProps {
  lesson: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => {
  return (
    <div className="card d-flex flex-column" style={{ height: "100%" }}>
      <img
        src={lesson.image}
        alt={lesson.title}
        className="card-img-top img-fluid"
        style={{ objectFit: "cover", height: "150px" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{lesson.title}</h5>
          <p className="card-text">{lesson.description}</p>
        </div>
        <div className="text-center">
          <Link to={`/lessons/${lesson.id}`} className="btn btn-primary mt-2">
            Pogledaj lekciju
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;

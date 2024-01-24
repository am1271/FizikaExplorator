import LessonCard from "../components/LessonCard";
import lessonsData from "../data/lessonsData.json";

export function Lessons() {
  const osnovnaSkolaLessons = lessonsData.filter(
    (lesson) => lesson.level === "Osnovna škola"
  );
  const srednjaSkolaLessons = lessonsData.filter(
    (lesson) => lesson.level === "Srednja škola"
  );

  return (
    <div className="home-container d-flex flex-column">
      <main className="flex-grow-1">
        <div className="os-container">
          <h2>Osnovna škola</h2>
          <br />
          <div className="card-deck row">
            {osnovnaSkolaLessons.map((lesson) => (
              <div key={lesson.id} className="col-md-3 col-sm-6 mb-4">
                <LessonCard lesson={lesson} />
              </div>
            ))}
          </div>
        </div>
        <br />
        <div className="ss-container">
          <h2>Srednja škola</h2>
          <br />
          <div className="card-deck row">
            {srednjaSkolaLessons.map((lesson) => (
              <div key={lesson.id} className="col-md-3 col-sm-6 mb-4">
                <LessonCard lesson={lesson} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

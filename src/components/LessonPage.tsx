import React, { Suspense } from "react";
import { useParams } from "react-router-dom";

const loadLessonComponent = (id: string) => {
  switch (id) {
    case "1":
      return import("../Lessons/OsnoveGibanja");
    case "2":
      return import("../Lessons/ToplinaUnutarnjaEnergija");
    case "3":
      return import("../Lessons/Elektromagnetizam");

    //Kada se izrade stranice za ostale lekcije dodati put do njih

    default:
      return import("../Lessons/DefaultPage");
  }
};

const LessonPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const validId = id || "1";
  const LessonComponent = React.lazy(() => loadLessonComponent(validId));

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LessonComponent />
      </Suspense>
    </div>
  );
};

export default LessonPage;

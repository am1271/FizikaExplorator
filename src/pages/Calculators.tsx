import { useState } from "react";
import { Container } from "react-bootstrap";
import PretvaracDuljine from "../converters/PretvaracDuljine";
import PretvaracBrzine from "../converters/PretvaracBrzine";
import PretvaracMase from "../converters/PretvaracMase";
import PretvaracPovrsine from "../converters/PretvaracPovrsine";
import PretvaracVolumena from "../converters/PretvaracVolumena";
import FormulaKinematika from "../formulas/FormulaKinematika";
import FormulaDinamika from "../formulas/FormulaDinamika";
import FormulaHidromehanika from "../formulas/FormulaHidromehanika";
import FormulaTermodinamika from "../formulas/FormulaTermodinamika";
import FormulaElektricitetMagnetizam from "../formulas/FormulaElektricitetMagnetizam";
import FormulaTitranjeValovi from "../formulas/FormulaTitranjeValovi";
import FormulaOptika from "../formulas/FormulaOptika";
import FormulaModernaFizika from "../formulas/FormulaModernaFizika";
import VelocityAccelerationGraph from "../components/VelocityAccelerationGraph";

export function Calculators() {
  const [activeConverter, setActiveConverter] = useState<string | null>(null);
  const [activeFormula, setActiveFormula] = useState<string | null>(null);

  const openConverter = (converter: string) => {
    setActiveConverter(converter);
  };

  const openFormula = (formula: string) => {
    setActiveFormula(formula);
  };

  const closeConverter = () => {
    setActiveConverter(null);
  };

  const closeFormula = () => {
    setActiveFormula(null);
  };

  return (
    <div className="container mt-4">
      {/* Pretvarači */}
      <h1 className="text-center mb-4">Pretvarači</h1>
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-2">
        <button
          className="btn btn-outline-dark mb-2"
          onClick={() => openConverter("duljine")}
        >
          Duljina
        </button>
        <button
          className="btn btn-outline-dark mb-2"
          onClick={() => openConverter("brzine")}
        >
          Brzina
        </button>
        <button
          className="btn btn-outline-dark mb-2"
          onClick={() => openConverter("mase")}
        >
          Masa
        </button>
        <button
          className="btn btn-outline-dark mb-2"
          onClick={() => openConverter("povrsine")}
        >
          Površina
        </button>
        <button
          className="btn btn-outline-dark mb-2"
          onClick={() => openConverter("volumena")}
        >
          Volumen
        </button>
      </div>

      {activeConverter === "duljine" && (
        <PretvaracDuljine closeConverter={closeConverter} />
      )}
      {activeConverter === "brzine" && (
        <PretvaracBrzine closeConverter={closeConverter} />
      )}
      {activeConverter === "mase" && (
        <PretvaracMase closeConverter={closeConverter} />
      )}
      {activeConverter === "povrsine" && (
        <PretvaracPovrsine closeConverter={closeConverter} />
      )}
      {activeConverter === "volumena" && (
        <PretvaracVolumena closeConverter={closeConverter} />
      )}

      {/* Formule */}
      <div className="mt-4">
        <h1 className="text-center mb-4">Formule</h1>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-2">
          <button
            className="btn btn-outline-dark mb-2"
            onClick={() => openFormula("Kinematika")}
          >
            Kinematika
          </button>
          <button
            className="btn btn-outline-dark mb-2"
            onClick={() => openFormula("Dinamika")}
          >
            Dinamika
          </button>
          <button
            className="btn btn-outline-dark mb-2"
            onClick={() => openFormula("Hidromehanika")}
          >
            Hidromehanika
          </button>
          <button
            className="btn btn-outline-dark mb-2"
            onClick={() => openFormula("Termodinamika")}
          >
            Termodinamika
          </button>
          <button
            className="btn btn-outline-dark mb-2"
            onClick={() => openFormula("ElektricitetMagnetizam")}
          >
            Elektricitet i magnetizam
          </button>
          <button
            className="btn btn-outline-dark mb-2"
            onClick={() => openFormula("TitranjeValovi")}
          >
            Titranje i valovi
          </button>
          <button
            className="btn btn-outline-dark mb-2"
            onClick={() => openFormula("Optika")}
          >
            Optika
          </button>
          <button
            className="btn btn-outline-dark mb-2"
            onClick={() => openFormula("ModernaFizika")}
          >
            Moderna fizika
          </button>
        </div>
      </div>

      {activeFormula === "Kinematika" && (
        <FormulaKinematika closeFormula={closeFormula} />
      )}
      {activeFormula === "Dinamika" && (
        <FormulaDinamika closeFormula={closeFormula} />
      )}
      {activeFormula === "Hidromehanika" && (
        <FormulaHidromehanika closeFormula={closeFormula} />
      )}
      {activeFormula === "Termodinamika" && (
        <FormulaTermodinamika closeFormula={closeFormula} />
      )}
      {activeFormula === "ElektricitetMagnetizam" && (
        <FormulaElektricitetMagnetizam closeFormula={closeFormula} />
      )}
      {activeFormula === "TitranjeValovi" && (
        <FormulaTitranjeValovi closeFormula={closeFormula} />
      )}
      {activeFormula === "Optika" && (
        <FormulaOptika closeFormula={closeFormula} />
      )}
      {activeFormula === "ModernaFizika" && (
        <FormulaModernaFizika closeFormula={closeFormula} />
      )}

      {/* Konstante */}
      <div className="mt-4">
        <h1 className="text-center mb-4">Konstante</h1>
        <div className="slika text-center">
          <img
            src="../imgs/Konstante.png"
            alt="Slika Konstante"
            className="img-fluid mb-4 mt-4"
          />
        </div>
      </div>

      <div className="mt-4 " style={{ maxWidth: "800px", margin: "auto" }}>
        <h3>Simulatori</h3>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Container>
            <VelocityAccelerationGraph />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Calculators;

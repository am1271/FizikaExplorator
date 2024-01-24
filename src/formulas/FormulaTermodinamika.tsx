import React from "react";

interface FormulaTermodinamikaProps {
  closeFormula: () => void;
}

const FormulaTermodinamika: React.FC<FormulaTermodinamikaProps> = ({
  closeFormula,
}) => {
  return (
    <div className="formula-container bg-light mt-4 container-sm w-75">
      <img
        src="../imgs/FormulaTermodinamika.png"
        alt="Slika Termodinamike"
        className="img-fluid mb-4 mt-4"
      />

      <button className="btn btn-danger mb-4" onClick={closeFormula}>
        Zatvori
      </button>
    </div>
  );
};

export default FormulaTermodinamika;

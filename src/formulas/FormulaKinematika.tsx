import React from "react";

interface FormulaKinematikaProps {
  closeFormula: () => void;
}

const FormulaKinematika: React.FC<FormulaKinematikaProps> = ({
  closeFormula,
}) => {
  return (
    <div className="formula-container bg-light mt-4 container-sm w-75">
      <img
        src="../imgs/FormulaKinematika.png"
        alt="Slika kinematike"
        className="img-fluid mb-4 mt-4"
      />

      <button className="btn btn-danger mb-4" onClick={closeFormula}>
        Zatvori
      </button>
    </div>
  );
};

export default FormulaKinematika;

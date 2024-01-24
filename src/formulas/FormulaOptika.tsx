import React from "react";

interface FormulaOptikaProps {
  closeFormula: () => void;
}

const FormulaOptika: React.FC<FormulaOptikaProps> = ({ closeFormula }) => {
  return (
    <div className="formula-container bg-light mt-4 container-sm w-75">
      <img
        src="../imgs/FormulaOptika.png"
        alt="Slika Optike"
        className="img-fluid mb-4 mt-4"
      />

      <button className="btn btn-danger mb-4" onClick={closeFormula}>
        Zatvori
      </button>
    </div>
  );
};

export default FormulaOptika;

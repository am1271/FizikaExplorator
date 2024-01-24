import React from "react";

interface FormulaHidromehanikaProps {
  closeFormula: () => void;
}

const FormulaHidromehanika: React.FC<FormulaHidromehanikaProps> = ({
  closeFormula,
}) => {
  return (
    <div className="formula-container bg-light mt-4 container-sm w-75">
      <img
        src="../imgs/FormulaHidromehanika.png"
        alt="Slika Hidromehanike"
        className="img-fluid mb-4 mt-4"
      />

      <button className="btn btn-danger mb-4" onClick={closeFormula}>
        Zatvori
      </button>
    </div>
  );
};

export default FormulaHidromehanika;

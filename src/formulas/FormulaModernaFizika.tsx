import React from "react";

interface FormulaModernaFizikaProps {
  closeFormula: () => void;
}

const FormulaModernaFizika: React.FC<FormulaModernaFizikaProps> = ({
  closeFormula,
}) => {
  return (
    <div className="formula-container bg-light mt-4 container-sm w-75">
      <img
        src="../imgs/FormulaModernaFizika.png"
        alt="Slika ModernaFizike"
        className="img-fluid mb-4 mt-4"
      />

      <button className="btn btn-danger mb-4" onClick={closeFormula}>
        Zatvori
      </button>
    </div>
  );
};

export default FormulaModernaFizika;

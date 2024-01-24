import React from "react";

interface FormulaElektricitetMagnetizamProps {
  closeFormula: () => void;
}

const FormulaElektricitetMagnetizam: React.FC<
  FormulaElektricitetMagnetizamProps
> = ({ closeFormula }) => {
  return (
    <div className="formula-container bg-light mt-4 container-sm w-75">
      <img
        src="../imgs/FormulaElektricitetMagnetizam.png"
        alt="Slika ElektricitetMagnetizam"
        className="img-fluid mb-4 mt-4"
      />

      <button className="btn btn-danger mb-4" onClick={closeFormula}>
        Zatvori
      </button>
    </div>
  );
};

export default FormulaElektricitetMagnetizam;

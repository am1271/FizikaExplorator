import React from "react";

interface FormulaTitranjeValoviProps {
  closeFormula: () => void;
}

const FormulaTitranjeValovi: React.FC<FormulaTitranjeValoviProps> = ({
  closeFormula,
}) => {
  return (
    <div className="formula-container bg-light mt-4 container-sm w-75">
      <img
        src="../imgs/FormulaTitranjeValovi.png"
        alt="Slika TitranjeValovi"
        className="img-fluid mb-4 mt-4"
      />

      <button className="btn btn-danger mb-4" onClick={closeFormula}>
        Zatvori
      </button>
    </div>
  );
};

export default FormulaTitranjeValovi;

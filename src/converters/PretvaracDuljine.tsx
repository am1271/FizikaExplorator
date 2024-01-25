import React, { useState } from "react";

interface PretvaracDuljineProps {
  closeConverter: () => void;
}

const PretvaracDuljine: React.FC<PretvaracDuljineProps> = ({
  closeConverter,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputUnit, setInputUnit] = useState<string>("m");
  const [convertedValues, setConvertedValues] = useState<{
    [key: string]: number;
  }>({});

  const [showConvertedValues, setShowConvertedValues] =
    useState<boolean>(false);

  const handleConvert = () => {
    const inputValueFloat = parseFloat(inputValue);

    if (!isNaN(inputValueFloat)) {
      // Postavljanje pretvorenih vrijednosti za različite jedinice površine
      const units = ["mm", "cm", "dm", "m", "km"];

      const convertedValuesMap: { [key: string]: number } = {};
      units.forEach((unit) => {
        const convertedValue = convert(inputUnit, unit, inputValueFloat);
        convertedValuesMap[unit] = convertedValue;
      });

      setConvertedValues(convertedValuesMap);
      setShowConvertedValues(true);
    }
  };

  const convert = (fromUnit: string, toUnit: string, value: number): number => {
    // Mapa faktora pretvorbe iz odabrane jedinice u sve ostale
    const conversionFactors: { [key: string]: number } = {
      mm: 1e3,
      cm: 1e2,
      dm: 1e1,
      m: 1,
      km: 1e-3,
    };

    // Pretvorba vrijednosti iz odabrane jedinice u sve ostale
    const fromFactor = conversionFactors[fromUnit];
    const toFactor = conversionFactors[toUnit];

    const convertedValue = (value / fromFactor) * toFactor;

    return convertedValue;
  };

  return (
    <div className="bg-light mt-4">
      <br />
      <h2 className="mb-4">Duljina</h2>

      <div className="mb-3">
        <label>Unesite vrijednost: </label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Odaberite mjernu jedinicu::</label>
        <select
          value={inputUnit}
          onChange={(e) => setInputUnit(e.target.value)}
        >
          <option value="mm">mm</option>
          <option value="cm">cm</option>
          <option value="dm">dm</option>
          <option value="m">m</option>
          <option value="km">km</option>
        </select>
      </div>
      <button className="btn btn-primary me-2 mb-4" onClick={handleConvert}>
        Pretvori
      </button>
      <button className="btn btn-danger mb-4" onClick={closeConverter}>
        Zatvori
      </button>
      {showConvertedValues && (
        <div className="mt-3">
          <p>Pretvorene vrijednosti:</p>
          <ul className="list-unstyled">
            {Object.entries(convertedValues).map(([unit, value]) => (
              <li key={unit}>
                {unit}: {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PretvaracDuljine;

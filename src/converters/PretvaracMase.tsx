import React, { useState } from "react";

interface PretvaracMaseProps {
  closeConverter: () => void;
}

const PretvaracMase: React.FC<PretvaracMaseProps> = ({ closeConverter }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputUnit, setInputUnit] = useState<string>("kg");
  const [convertedValues, setConvertedValues] = useState<{
    [key: string]: number;
  }>({});
  const [showConvertedValues, setShowConvertedValues] =
    useState<boolean>(false);

  const handleConvert = () => {
    const inputValueFloat = parseFloat(inputValue);

    if (!isNaN(inputValueFloat)) {
      const units = ["mg", "g", "dg", "kg", "t"];

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
    const conversionFactors: { [key: string]: number } = {
      mg: 1e6,
      g: 1e3,
      dg: 1e2,
      kg: 1,
      t: 1e-3,
    };

    const fromFactor = conversionFactors[fromUnit];
    const toFactor = conversionFactors[toUnit];

    const convertedValue = (value / fromFactor) * toFactor;

    return convertedValue;
  };

  return (
    <div className="bg-light mt-4">
      <br />
      <h2 className="mb-4">Masa</h2>

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
          <option value="mg">mg</option>
          <option value="g">g</option>
          <option value="dg">dg</option>
          <option value="kg">kg</option>
          <option value="t">t</option>
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

export default PretvaracMase;

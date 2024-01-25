import React, { useState } from "react";

interface PretvaracBrzineProps {
  closeConverter: () => void;
}

const PretvaracBrzine: React.FC<PretvaracBrzineProps> = ({
  closeConverter,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputUnit, setInputUnit] = useState<string>("m/s");
  const [convertedValues, setConvertedValues] = useState<{
    [key: string]: number;
  }>({});

  const [showConvertedValues, setShowConvertedValues] =
    useState<boolean>(false);

  const handleConvert = () => {
    const inputValueFloat = parseFloat(inputValue);

    if (!isNaN(inputValueFloat)) {
      const units = ["m/s", "km/s", "km/h", "m/min", "km/min"];

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
      "m/s": 1,
      "km/s": 1e-3,
      "km/h": 3.6,
      "m/min": 60,
      "km/min": 0.06,
    };

    const fromFactor = conversionFactors[fromUnit];
    const toFactor = conversionFactors[toUnit];

    const convertedValue = (value / fromFactor) * toFactor;

    return convertedValue;
  };

  return (
    <div className="bg-light mt-4">
      <br />
      <h2 className="mb-4">Brzina</h2>

      <div className="mb-3">
        <label>Unesite vrijednost: </label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Odaberite mjernu jedinicu:</label>
        <select
          value={inputUnit}
          onChange={(e) => setInputUnit(e.target.value)}
        >
          <option value="m/s">m/s</option>
          <option value="km/s">km/s</option>
          <option value="km/h">km/h</option>
          <option value="m/min">m/min</option>
          <option value="km/min">km/min</option>
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

export default PretvaracBrzine;

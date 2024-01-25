import React, { useState } from "react";

interface PretvaracPovrsineProps {
  closeConverter: () => void;
}

const PretvaracPovrsine: React.FC<PretvaracPovrsineProps> = ({
  closeConverter,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputUnit, setInputUnit] = useState<string>("m^2");
  const [convertedValues, setConvertedValues] = useState<{
    [key: string]: number;
  }>({});
  const [showConvertedValues, setShowConvertedValues] =
    useState<boolean>(false);
  const handleConvert = () => {
    const inputValueFloat = parseFloat(inputValue);

    if (!isNaN(inputValueFloat)) {
      const units = ["mm^2", "cm^2", "dm^2", "m^2", "km^2"];

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
      "mm^2": 1e6,
      "cm^2": 1e4,
      "dm^2": 1e2,
      "m^2": 1,
      "km^2": 1e-6,
    };

    const fromFactor = conversionFactors[fromUnit];
    const toFactor = conversionFactors[toUnit];

    const convertedValue = (value / fromFactor) * toFactor;

    return convertedValue;
  };

  return (
    <div className="bg-light mt-4">
      <br />
      <h2 className="mb-4">Površina</h2>

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
          <option value="mm^2">mm^2</option>
          <option value="cm^2">cm^2</option>
          <option value="dm^2">dm^2</option>
          <option value="m^2">m^2</option>
          <option value="km^2">km^2</option>
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

export default PretvaracPovrsine;

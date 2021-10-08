import React, { useState } from 'react';

const units = {
  CELSIUS: { short: 'C', full: 'Celsius' },
  FAHRENHEIT: { short: 'F', full: 'Fahrenheit' },
};

const Temperature = () => {
  const [isCelcius, setIsCelcius] = useState(true);
  const [temperature, setTemperature] = useState(0);
  const [convertedTemperature, setConvertedTemperature] = useState();

  const handleConvert = () => {
    const convertedTemp = isCelcius
      ? celsiusToFahrenheit(temperature)
      : fahrenheitToCelsius(temperature);
    setConvertedTemperature(convertedTemp);
  };

  const handleInputChange = (e) => {
    const temp = e.target.value;
    setTemperature(temp);
  };

  const handleUnitChange = (e) => {
    setIsCelcius(e.target.value === units.CELSIUS.full);
  };

  const celsiusToFahrenheit = (temperature) => {
    return temperature * 1.8 + 32;
  };

  const fahrenheitToCelsius = (temperature) => {
    return (temperature - 32) / 1.8;
  };

  const renderResult = () => {
    if (convertedTemperature !== undefined) {
      return (
        <p>
          {convertedTemperature}{' '}
          <span>
            {isCelcius ? units.FAHRENHEIT.short : units.CELSIUS.short}
          </span>
        </p>
      );
    }
  };

  return (
    <div>
      <fieldset id="unit" onChange={handleUnitChange}>
        <p>
          <label for="celsius-radio">{units.CELSIUS.full}</label>
          <input
            type="radio"
            id="celsius-radio"
            value={units.CELSIUS.full}
            name="unit"
          />
        </p>
        <p>
          <label for="fahrenheit-radio">{units.FAHRENHEIT.full}</label>
          <input
            type="radio"
            id="fahrenheit-radio"
            value={units.FAHRENHEIT.full}
            name="unit"
          />
        </p>
      </fieldset>
      <label for="temperature">
        Temperature in {isCelcius ? units.CELSIUS.full : units.FAHRENHEIT.full}
      </label>
      <input
        type="number"
        id="temperature"
        name="temperature"
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleConvert}>
        Convert to {isCelcius ? units.FAHRENHEIT.short : units.CELSIUS.short}
      </button>
      {renderResult()}
    </div>
  );
};

export default Temperature;

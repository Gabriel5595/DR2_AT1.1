import React, { useState } from 'react';

function IMCCalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const bmi = calculateBMI();
    const classification = getBMIClassification(bmi);
    setMessage(`Seu IMC é ${bmi} e sua classificação é ${classification}.`);
  };

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
  };

  const getBMIClassification = (bmi) => {
    if (bmi < 18.5) {
      return 'abaixo do peso';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'com peso normal';
    } else if (bmi >= 25 && bmi < 30) {
      return 'com sobrepeso';
    } else if (bmi >= 30 && bmi < 35) {
      return 'com obesidade grau I';
    } else if (bmi >= 35 && bmi < 40) {
      return 'com obesidade grau II';
    } else {
      return 'com obesidade grau III';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">Altura (cm):</label>
      <input type="number" id="height" value={height} onChange={(event) => setHeight(event.target.value)} />

      <label htmlFor="weight">Peso (kg):</label>
      <input type="number" id="weight" value={weight} onChange={(event) => setWeight(event.target.value)} />

      <button type="submit">Calcular IMC</button>

      {message && <p>{message}</p>}
    </form>
  );
}

export default IMCCalculator;

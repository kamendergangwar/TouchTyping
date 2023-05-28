import React from 'react';
import { useSelector } from 'react-redux';

const AccuracyCalculator = () => {
  const accuracy = useSelector((state) => state.typing.accuracy);

  return (
    <div className="accuracy-calculator">
      <h2>Accuracy:</h2>
      <p>{accuracy.toFixed(2)}%</p>
    </div>
  );
};

export default AccuracyCalculator;

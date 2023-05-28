import React from 'react';
import { useSelector } from 'react-redux';

const StatisticsDisplay = () => {
  const keysPressed = useSelector((state) => state.typing.keysPressed);
  const accuracy = useSelector((state) => state.typing.accuracy);

  return (
    <div className="statistics-display">
      <h2>Statistics:</h2>
      <p>Keys Pressed: {keysPressed}</p>
      <p>Accuracy: {accuracy.toFixed(2)}%</p>
    </div>
  );
};

export default StatisticsDisplay;

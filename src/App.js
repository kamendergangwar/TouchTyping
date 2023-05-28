import React from 'react';
import TypingBox from './components/TypingBox';
import NextKeysDisplay from './components/NextKeyDisplay';
import StatisticsDisplay from './components/StatisticsDisplay';
import Timer from './components/Timer';
import AccuracyCalculator from './components/AccuracyCalculator';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Touch Typing Practice</h1>
      <div className="practice-area">
        <NextKeysDisplay />
        <TypingBox />
        <StatisticsDisplay />
      </div>
      <div className="timer-area">
        <Timer />
        <AccuracyCalculator />
      </div>
    </div>
  );
};

export default App;

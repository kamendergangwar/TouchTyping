import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTimer } from '../redux/typingSlice';

const Timer = () => {
  const dispatch = useDispatch();
  const duration = useSelector((state) => state.typing.duration);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(updateTimer());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <div className="timer">
      <h2>Timer:</h2>
      <p>{formatTime(duration)}</p>
    </div>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
};

export default Timer;

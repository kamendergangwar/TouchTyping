import React from 'react';
import { useSelector } from 'react-redux';

const NextKeysDisplay = () => {
  const nextKeys = useSelector((state) => state.typing.nextKeys);

  return (
    <div className="next-keys-display">
      <h2>Next Keys:</h2>
      <p>{nextKeys}</p>
    </div>
  );
};

export default NextKeysDisplay;

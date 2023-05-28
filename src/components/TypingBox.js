import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentKey, calculateAccuracy } from '../redux/typingSlice';

const TypingBox = () => {
  const dispatch = useDispatch();
  const currentKey = useSelector((state) => state.typing.currentKey);
  const typingBoxRef = useRef(null);

  useEffect(() => {
    typingBoxRef.current.focus();
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const { key } = event;
      dispatch(updateCurrentKey(key));
      dispatch(calculateAccuracy());
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [dispatch]);

  return (
    <div className="typing-box">
      <input
        type="text"
        value={currentKey}
        readOnly
        ref={typingBoxRef}
        className="typing-input"
      />
    </div>
  );
};

export default TypingBox;

import { createSlice } from '@reduxjs/toolkit';

const typingSlice = createSlice({
  name: 'typing',
  initialState: {
    currentKey: '',
    nextKeys: 'asdfjkl;',
    keysPressed: 0,
    correctKeyPressed: 0,
    duration: 0,
    accuracy: 0
  },
  reducers: {
    updateCurrentKey: (state, action) => {
      state.currentKey = action.payload;
      state.keysPressed += 1;
    },
    updateTimer: (state) => {
      state.duration += 1;
    },
    calculateAccuracy: (state) => {
      const { currentKey, nextKeys } = state;
      const isCorrectKey = currentKey === nextKeys[0];

      if (isCorrectKey) {
        state.correctKeyPressed += 1;
      }

      state.accuracy = (state.correctKeyPressed / state.keysPressed) * 100;
    }
  }
});

export const { updateCurrentKey, updateTimer, calculateAccuracy } = typingSlice.actions;
export default typingSlice.reducer;

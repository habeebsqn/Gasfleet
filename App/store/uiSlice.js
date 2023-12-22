import {createSlice} from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isModalEnabled: false,
  },

  reducers: {
    handleOpenModal(currentState) {
      currentState.isModalEnabled = !currentState.isModalEnabled;
    },
  },
});

export const uiSliceAction = uiSlice.actions;

export default uiSlice;

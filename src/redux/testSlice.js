import { createSlice } from '@reduxjs/toolkit';

export const testSlice = createSlice({
  name: 'test',
  initialState: {
    value: '',
  },
  reducers: {
    testChange: (state, action) => {
      state.value = action.payload;
    },
    testShow: (state) => {
      console.log({ value: state.value });
    },
  },
});

// Action creators are generated for each case reducer function
export const { testChange, testShow } = counterSlice.actions;

export default counterSlice.reducer;

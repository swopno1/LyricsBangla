import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  colorMode: 'light',
  isAuthenticated: false,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState: initialState,
  reducers: {
    changeColorMode: (state, action) => {
      state.colorMode = !state.colorMode;
    },
  },
});

export const {changeColorMode} = settingsSlice.actions;
export default settingsSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';
import {useColorScheme} from 'react-native';

const initialState = {
  colorMode: 'light', // This is not yet using, I may not use this approach
  isAuthenticated: false,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setColorMode: (state, action) => {
      state.colorMode = action.payload;
    },
  },
});

export const {setColorMode} = settingsSlice.actions;
export default settingsSlice.reducer;

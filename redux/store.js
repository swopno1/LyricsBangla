import {configureStore} from '@reduxjs/toolkit';
import songReducer from './songSlice';
import settingsReducer from './settingsSlice';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    song: songReducer,
  },
});

export default store;

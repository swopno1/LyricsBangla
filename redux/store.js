import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import songReducer from "./songSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    song: songReducer,
  },
});

export default store;

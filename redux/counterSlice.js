import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 3,
  },
  reducers: {
    increment: (state) => state.count + 1,
    reset: (state) => (state.count = 0),
  },
});

export const { increment, reset } = counterSlice.actions;
export default counterSlice.reducer;

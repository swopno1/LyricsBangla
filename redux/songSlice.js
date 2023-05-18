import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk action creator for fetching song data
export const fetchSong = createAsyncThunk("song/fetchSong", async () => {
  const options = {
    method: "GET",
    url: `https://lyrics-api-orpin.vercel.app/songs`,
    headers: {
      "content-type": "application/json",
    },
  };

  const response = await axios.request(options);

  return response.data; // Assuming your API response contains 'data' property
});

const songSlice = createSlice({
  name: "song",
  initialState: {
    data: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSong.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSong.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchSong.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default songSlice.reducer;

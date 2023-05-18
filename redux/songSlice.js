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
    popularSong: null,
    latestSong: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setPopularSong: (state, action) => {
      state.popularSong = action.payload;
    },
    setLatestSong: (state, action) => {
      state.latestSong = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSong.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSong.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        // Set random data from the fetched response
        const randomData = getRandomItems(action.payload, 10); // Change 10 to the desired number of random items
        state.popularSong = randomData;
        state.latestSong = randomData;
      })
      .addCase(fetchSong.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// Utility function to get random items from an array
const getRandomItems = (array, count) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const { setPopularSong, setLatestSong } = songSlice.actions;
export default songSlice.reducer;

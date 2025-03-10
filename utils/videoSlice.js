import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
  },
  reducers: {
    addVideos: (state, action) => {
      state.videos.push(action.payload); // ✅ Adds new messages at the bottom
    },
  },
});

export const { addVideos } = videoSlice.actions;

export default videoSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.message.length >= OFFSET_LIVE_CHAT) {
        state.message.shift(); // ✅ Removes the oldest message from the top
      }
      state.message.push(action.payload); // ✅ Adds new messages at the bottom
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;

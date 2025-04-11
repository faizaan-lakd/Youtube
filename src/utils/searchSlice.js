import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    cachedSuggestionResults: {},
  },
  reducers: {
    cacheResults: (state, action) => {
      state.cachedSuggestionResults = Object.assign(
        state.cachedSuggestionResults,
        action.payload
      );
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;

import { createAsyncThunk, createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isWhiteMode: false,
    isGnbOpen: false
  },
  reducers: {
    setIsWhiteMode: (state, action) => {
      state.isWhiteMode = action.payload;
    },
    setIsGnbOpen : (state, action) => {
      state.isGnbOpen = action.payload;
    }
  },
});

export const { setIsWhiteMode, setIsGnbOpen } = themeSlice.actions;
export const themeSelector = state => state.theme;



export default themeSlice.reducer;

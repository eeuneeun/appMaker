import { createAsyncThunk, createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoading: true,
  },
  reducers: {
    setIsLoading : (state, action) => {
      state.isLoading = action.payload;
    }
  },
});

export const { setIsLoading } = loadingSlice.actions;

export const loadingSelector = state => { state.isLoading };



export default loadingSlice.reducer;

import { createAsyncThunk, createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    accToken : "",
    refToken: "",
  },
  reducers: {
    setAccToken: (state, action) => {
      state.accToken = action.payload;
    },
    setRefToken : (state, action) => {
      state.refToken = action.payload;
    }
  },
});

export const { setAccToken, setRefToken } = tokenSlice.actions;
export const tokenSelector = state => {state.accToken, state.refToken};



export default tokenSlice.reducer;

import { createAsyncThunk, createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

export const profitSlice = createSlice({
  name: 'token',
  initialState: {
    recData: [],
    smpData: [],
    smpProfitData: [],
    genAmountInfoData : [],
  },
  reducers: {
    setRecData : (state, action) => {
      state.recData = action.payload;
    },
    setSmpData : (state, action) => {
      state.smpData = action.payload;
    },
    setSmpProfitData : (state, action) => {
      state.smpProfitData = action.payload;
    },
    setGenAmountInfoData: (state, action) => {
      state.genAmountInfoData = action.payload;
    },
  },
});

export const { setRecData, setSmpData, setSmpProfitData, setGenAmountInfoData} = profitSlice.actions;

export const profitSelector = state => {state.recData, state.smpData, state.smpProfitData, state.genAmountInfoData};



export default profitSlice.reducer;

import { createAsyncThunk, createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

export const plantSlice = createSlice({
  name: 'plant',
  initialState: {
    allPlantList : [],
    selectedPlant: [],
  },
  reducers: {
    setAllPlantList: (state, action) => {
      state.allPlantList = action.payload;
    },
    setSelectedPlant : (state, action) => {
      state.selectedPlant = action.payload;
    }
  },
});

export const { setAllPlantList, setSelectedPlant } = plantSlice.actions;
export const plantSelector = state => {
  state.selectedPlant,
  state.allPlantList
};


export default plantSlice.reducer;

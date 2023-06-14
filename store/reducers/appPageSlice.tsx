import { HYDRATE } from 'next-redux-wrapper';
import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store/storeConfig';
import { ActionType } from 'typesafe-actions';

interface appPageState {
  appPageList: [string];
}

const initialState: appPageState = {
  appPageList: ['DefaultPage'],
};

export const appPageSlice = createSlice({
  name: 'appPage',
  initialState,
  reducers: {
    addPage: (state: appPageState, action: PayloadAction<string>) => {
      state.appPageList.push(action.payload);
    },
    deletePage: (state: appPageState, action: PayloadAction<number>) => {
      state.appPageList.splice(action.payload, 0);
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const asyncDispatchLogin = (state: any) => (dispatch: any) => {
  setTimeout(() => {
    dispatch(deletePage(state));
  }, 1000);
};

export const { addPage, deletePage } = appPageSlice.actions;
export const authSelector = (state: RootState) => state.auth;

export default appPageSlice.reducer;

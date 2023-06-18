import { HYDRATE } from 'next-redux-wrapper';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store/storeConfig';

export interface appPageInfo {
  pageType: string;
  pageId: string;
}

export interface appPageState {
  appPageList: [appPageInfo];
  nowEditPage: string;
  nextEditPage: string;
}

const initialState: appPageState = {
  appPageList: [{ pageType: 'DefaultPage', pageId: 'p1' }],
  nowEditPage: 'p1',
  nextEditPage: '',
};

export const appPageSlice = createSlice({
  name: 'appPage',
  initialState,
  reducers: {
    addPage: (state: appPageState, action: PayloadAction<appPageInfo>) => {
      state.appPageList.push(action.payload);
    },
    deletePage: (state: appPageState, action: PayloadAction<number>) => {
      state.appPageList.splice(action.payload, 0);
    },
    setNowEditPage: (state: appPageState, action: PayloadAction<string>) => {
      state.nowEditPage = action.payload;
    },
    setNextEditPage: (state: appPageState, action: PayloadAction<string>) => {
      state.nowEditPage = action.payload;
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

export const { addPage, deletePage, setNowEditPage, setNextEditPage } =
  appPageSlice.actions;
export const authSelector = (state: RootState) => state.auth;

export default appPageSlice.reducer;

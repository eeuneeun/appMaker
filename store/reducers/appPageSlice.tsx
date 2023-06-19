import { HYDRATE } from 'next-redux-wrapper';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store/storeConfig';

export interface ContentInfo {
  compoType: string;
}

export interface AppPageInfo {
  pageType: string;
  pageId: string;
  pageContents: [ContentInfo];
}

export interface AppPageState {
  appPageList: [AppPageInfo];
  nowEditPage: string;
}

export interface AddCompoInfo {
  pageId: string;
  compoType: string;
}

const initialState: AppPageState = {
  appPageList: [
    {
      pageType: 'DefaultPage',
      pageId: 'p1',
      pageContents: [{ compoType: '' }],
    },
  ],
  nowEditPage: 'p1',
};

export const appPageSlice = createSlice({
  name: 'appPage',
  initialState,
  reducers: {
    addPage: (state: AppPageState, action: PayloadAction<AppPageInfo>) => {
      state.appPageList.push(action.payload);
    },
    deletePage: (state: AppPageState, action: PayloadAction<string>) => {
      if (state.appPageList.length > 1) {
        const targetIdx = state.appPageList.findIndex(
          (item) => item.pageId === action.payload,
        );

        state.appPageList.splice(targetIdx, 1);
      } else {
        return alert('최소한 하나의 페이지가 필요합니다!');
      }
    },
    addComponent: (
      state: AppPageState,
      action: PayloadAction<AddCompoInfo>,
    ) => {
      const targetIdx = state.appPageList.findIndex(
        (item) => item.pageId === action.payload.pageId,
      );
      state.appPageList[targetIdx].pageContents.push({
        compoType: action.payload.compoType,
      });
    },
    setNowEditPage: (state: AppPageState, action: PayloadAction<string>) => {
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
    +dispatch(deletePage(state));
  }, 1000);
};

export const { addPage, deletePage, addComponent, setNowEditPage } =
  appPageSlice.actions;
export const authSelector = (state: RootState) => state.auth;

export default appPageSlice.reducer;

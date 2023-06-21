import { HYDRATE } from 'next-redux-wrapper';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store/storeConfig';
import { getIdxOfArr } from 'components/utils/utilFunctions';

export interface AppPageInfo {
  id: string;
  startType: string;
  header?: string;
  footer?: string;
  compoList: [CompoInfo];
}

export interface CompoInfo {
  id: string;
  type: string;
}

export interface AppPageState {
  appPageList: [AppPageInfo];
  nowEditPage: string;
}

export interface AddCompoInfo {
  id: string;
  CompoInfo: CompoInfo;
}

const initialState: AppPageState = {
  appPageList: [
    {
      id: 'p1',
      startType: 'DefaultPage',
      header: 'DefaultAppBar',
      footer: 'DefaultNavMenu',
      compoList: [{ id: 'c1', type: 'div' }],
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
        const targetIdx = getIdxOfArr(state.appPageList, action.payload);

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
        (item) => item.id === action.payload.id,
      );
      state.appPageList[targetIdx].compoList.push({
        id: action.payload.CompoInfo.id,
        type: action.payload.CompoInfo.type,
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

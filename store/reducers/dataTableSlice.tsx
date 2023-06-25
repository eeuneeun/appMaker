import { HYDRATE } from 'next-redux-wrapper';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store/storeConfig';
import { getIdxOfArr } from 'components/utils/utilFunctions';

export interface DataTableInfo {
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

export interface dataTableState {
  dataTableList: [DataTableInfo];
  nowEditPage: string;
}

export interface AddCompoInfo {
  id: string;
  compoInfo: CompoInfo;
}

const initialState: dataTableState = {
  dataTableList: [
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

export const dataTableSlice = createSlice({
  name: 'appPage',
  initialState,
  reducers: {
    addTable: (state: dataTableState, action: PayloadAction<DataTableInfo>) => {
      state.dataTableList.push(action.payload);
    },
    deleteTable: (state: dataTableState, action: PayloadAction<string>) => {
      if (state.dataTableList.length > 1) {
        const targetIdx = getIdxOfArr(state.dataTableList, action.payload);

        state.dataTableList.splice(targetIdx, 1);
      } else {
        return alert('최소한 하나의 페이지가 필요합니다!');
      }
    },
    saveData: (state: dataTableState, action: PayloadAction<AddCompoInfo>) => {
      const targetIdx = state.dataTableList.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.dataTableList[targetIdx].compoList.push({
        id: action.payload.compoInfo.id,
        type: action.payload.compoInfo.type,
      });
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

export const asyncDispatchSetDT = (state: any) => (dispatch: any) => {
  setTimeout(() => {
    +dispatch(deleteTable(state));
  }, 1000);
};

export const { addTable, deleteTable, saveData } = dataTableSlice.actions;
export const authSelector = (state: RootState) => state.auth;

export default dataTableSlice.reducer;

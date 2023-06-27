import { HYDRATE } from 'next-redux-wrapper';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store/storeConfig';
import { getIdxOfArr } from 'components/utils/utilFunctions';


export interface colsInfo {
  key: string,
  name: string
}
export interface DataTableInfo {
  id: string;
  tableName: string;
  cols: colsInfo[];
  rows: any;
}

export interface dataTableState {
  dataTableList: [DataTableInfo];
  nowEditPage: string;
}

const initialState: dataTableState = {
  dataTableList: [
    {
      id: 'p1',
      tableName: 'default',
      cols: [
        { key: 'id', name: 'ID' },
        { key: 'name', name: 'name' },
        { key: 'title', name: 'Title' }
      ],
      rows: [
        { id: 0, name: 'aa', title: 'Example' },
        { id: 1, name: 'aa', title: 'Demo' }
      ]
    },
  ],
  nowEditPage: 'p1',
};

export const dataTableSlice = createSlice({
  name: 'dataTable',
  initialState,
  reducers: {
    addTable: (state: dataTableState, action: PayloadAction<DataTableInfo>) => {
      state.dataTableList.push(action.payload);
    },
    deleteTable: (state: dataTableState, action: PayloadAction<string>) => {
      console.log(action.payload);

    },
    saveData: (state: dataTableState, action: PayloadAction<string>) => {
      console.log(action.payload);

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

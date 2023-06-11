import { HYDRATE } from 'next-redux-wrapper';
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  createSelector,
} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    isAdmin: false,
  },
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setIsAdmin: (state, action) => {
      state.isAdmin = action.payload;
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
    dispatch(setIsLogin(state));
  }, 1000);
};

export const { setIsLogin, setIsAdmin } = authSlice.actions;
export const authSelector = (state: any) => state.auth;

export default authSlice.reducer;

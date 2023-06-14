import { HYDRATE } from 'next-redux-wrapper';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store/storeConfig';

interface authState {
  isLogin: boolean;
  isAdmin: boolean;
}

const initialState: authState = {
  isLogin: false,
  isAdmin: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLogin: (state: authState, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setIsAdmin: (state: authState, action: PayloadAction<boolean>) => {
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
export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer;

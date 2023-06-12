import { HYDRATE } from 'next-redux-wrapper';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store/storeConfig';
import { ActionType } from 'typesafe-actions';

interface authState {
  isLogin: boolean;
  isAdmin: boolean;
}

const initialState: authState = {
  isLogin: false,
  isAdmin: false,
};

// const initialState = {
//   isLogin: false,
//   isAdmin: false,
// } as authState

const LOGIN = 'auth/setIsLogin';
const ADMIN = 'auth/setIsAdmin';

export const chkLogin = (value: boolean) => {
  return { type: LOGIN, payload: value };
};

export const chkAdmin = (value: boolean) => {
  return { type: ADMIN, payload: value };
};

type authActionType = ActionType<typeof chkLogin> | ActionType<typeof chkAdmin>;

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLogin: (state: authState, action: PayloadAction<boolean>) => {
      console.log('state, action', state, action);
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
export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer;

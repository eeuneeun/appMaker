//store/modules/index.ts
import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import userSlice from './reducers/userSlice';
import authSlice from './reducers/authSlice';

const rootReducer = (state: any, action: AnyAction): CombinedState<any> => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default: {
      const combinedReducer = combineReducers({ userSlice, authSlice });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;

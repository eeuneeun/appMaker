// *** store.ts 파일
// 슬라이스들을 통합한 store를 만들고, RootState를 정의해준다.

import {
  configureStore,
  Action,
  getDefaultMiddleware,
  EnhancedStore,
  Store,
} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import { MakeStore, createWrapper } from 'next-redux-wrapper';

const middleware = [...getDefaultMiddleware(), logger];

// 리덕스 store 생성함수
const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development', // 개발자도구 설정
});

// store 생성
const makeStore: MakeStore<EnhancedStore> = () => store;

export const wrapper = createWrapper<Store>(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});
export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

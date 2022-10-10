import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { getDefaultNormalizer } from '@testing-library/react';
import { showsReducer } from '../features/dates/datesSlice';

export const store = configureStore({
  reducer: {
    shows: showsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
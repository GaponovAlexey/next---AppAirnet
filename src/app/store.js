import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/reducerCounter'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

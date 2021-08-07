import { configureStore } from "@reduxjs/toolkit";
import configurate from '../features/counter/reducerCounter'


export const store = configureStore ({
  reducer: {
    sisadmin: configurate
  }
})
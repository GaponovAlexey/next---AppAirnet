import { configureStore } from "@reduxjs/toolkit";
import configurate from '../features/counter/reducerCounter'
import setRepos from './../features/counter/corReducer';


export const store = configureStore ({
  reducer: {
    sisadmin: configurate,
    repos: setRepos,
  }
})
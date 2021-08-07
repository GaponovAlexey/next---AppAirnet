//import { createSlice } from '@reduxjs/toolkit'

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'da4a',
  initialState,
  reducers: {
    increment: (store) => {
      store.value += 1
    },
    decrement: (store) => {
      store.value -= 1
    },
    incrementByAmount: (store, action) => {
      store.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer

export const selectCount = (state) => state.sisadmin.value

//const initialState = {
//  value: 0,
//}
//export const counterSlice = createSlice({
//  name: 'counter',
//  initialState,
//  reducers: {
//    increment: (state) => {
//      state.value += 1
//    },
//    decrement: (state) => {
//      state.value -= 1
//    },
//    incrementByAmount: (state, action) => {
//      state.value += action.payload
//    },
//  },
//})

//export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

//export const incrementAsync = (amount) => (dispatch) => {
//  setTimeout(() => {
//    dispatch(incrementByAmount(amount))
//  }, 1000)
//}

//export const selectCount = (state) => state.counter.value

//export default counterSlice.reducer


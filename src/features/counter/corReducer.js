import { createSlice } from '@reduxjs/toolkit'


const initialState = {
	client_id: 0,

}


const corReducer = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		repos: (state, action) => {
			state.client_id = action.payload

    },

  },
})

export const { repos } = corReducer.actions




export default corReducer.reducer


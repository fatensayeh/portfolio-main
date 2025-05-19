import { configureStore } from "@reduxjs/toolkit"
import userSlice from './userSlice'
import counterSlice from "./counterSlice";
import { apiSlice } from "@/service/apiSlice";
import { listenerMiddleware } from './listenerMiddleware'

const store = configureStore({
	reducer: {
		user : userSlice,
		counter : counterSlice,
		[apiSlice.reducerPath]: apiSlice.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware()
		  .prepend(listenerMiddleware.middleware)
		  .concat(apiSlice.middleware)
})


export default store;
import { configureStore } from "@reduxjs/toolkit";

import { kittiesApi } from "../services/kittiesApi";

export default configureStore({
	reducer: {
		[kittiesApi.reducerPath]: kittiesApi.reducer,
	},
});

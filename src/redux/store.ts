import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./commentSlice"
// import AuthReducer from "./slices/AuthSlice";
import {postApi} from "../services/apiComments"
// import { pokemonApi } from "../services/pokemonFetch";

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    comments: commentReducer ,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import {configureStore} from "@reduxjs/toolkit";
import {dadJokeReducer} from "./dadJokeSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    dadJoke: dadJokeReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
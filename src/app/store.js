import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { movieReducer } from "../features/movie/movieSlider";
import { useReducer } from "../features/user/userSlice";

export default configureStore({
  reducer: {
    user: useReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

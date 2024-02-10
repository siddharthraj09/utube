import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice.js";
import searchReducer from "./searchSlice.js";
const appStore = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
  },
});

export default appStore;

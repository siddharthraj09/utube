import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice.js";
const appStore = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default appStore;

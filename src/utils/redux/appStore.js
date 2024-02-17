import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice.js";
import searchReducer from "./searchSlice.js";
import chatReducer from "./chatSlice.js";
const appStore = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
    chat: chatReducer,
  },
});

export default appStore;

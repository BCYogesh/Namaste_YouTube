import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slice/appSlice";
import searchSlice from "./slice/searchSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
    }
});

export default store;
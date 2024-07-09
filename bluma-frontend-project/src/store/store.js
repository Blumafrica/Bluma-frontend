import { configureStore } from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import rootReducer from "./rootReducer.ts";



export const store = configureStore({

    reducer : rootReducer,

    middleware:(getDefaultMiddle) =>
        getDefaultMiddle.concat([

        ]),
    immutableCheck: false,
    serializableCheck: false,
});

setupListeners(store.dispatch)

export default store;
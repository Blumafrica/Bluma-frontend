import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import {setupListeners} from "@reduxjs/toolkit/query";



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
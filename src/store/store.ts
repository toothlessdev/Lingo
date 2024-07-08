import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { logSlice } from "./log.slice";
import session from "redux-persist/lib/storage/session";

const persistConfig = {
    key: "root",
    storage: session,
    whitelist: ["log"],
};

const rootReducer = combineReducers({
    log: logSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

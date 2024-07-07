import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { logSlice } from "./log.slice";

const persistConfig = {
    key: "root",
    storage,
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

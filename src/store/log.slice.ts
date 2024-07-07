import { ILog, LogRequest } from "@/services/log/log.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Log {
    translationModel: string;
    targetSentence: string;
    translatedSentence: string;

    sourceLang: string;
    targetLang: string;

    time: string;
}

const initialState: { logs: Log[] } = {
    logs: [],
};

export const logSlice = createSlice({
    name: "lingo/log",
    initialState,
    reducers: {
        addLog: (state, action: PayloadAction<Log>) => {
            const now = new Date();
            const time = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
            state.logs.push({ ...action.payload, time });
        },
        clearLog: (state) => {
            state.logs = [];
        },
    },
});

export const logActions = logSlice.actions;

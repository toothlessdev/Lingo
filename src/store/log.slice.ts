import { IEvaluationLog, ILog, ISuggestionLog, LogRequest } from "@/services/log/log.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { currentLogIndex: number; logs: ILog[] } = {
    currentLogIndex: -1,
    logs: [],
};

export const logSlice = createSlice({
    name: "lingo/log",
    initialState,
    reducers: {
        addLog: (state, action: PayloadAction<Omit<ILog, "evaluation" | "suggestions">>) => {
            state.currentLogIndex++;
            state.logs.push({
                ...action.payload,
                suggestions: [],
            });
        },

        addFeedbackLog: (state, action: PayloadAction<{ evaluation: IEvaluationLog }>) => {
            state.logs[state.currentLogIndex].evaluation = action.payload.evaluation;
        },

        addSuggestionLog: (state, action: PayloadAction<{ suggestion: ISuggestionLog }>) => {
            state.logs[state.currentLogIndex].suggestions?.push({
                ...action.payload.suggestion,
            });
        },

        clearLog: (state) => {
            state.currentLogIndex = -1;
            state.logs = [];
        },
    },
});

export const logActions = logSlice.actions;

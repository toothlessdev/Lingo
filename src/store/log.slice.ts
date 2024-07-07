import { createSlice } from "@reduxjs/toolkit";

interface ILogInitialState {}

const initialState: ILogInitialState = {};

export const logSlice = createSlice({
    name: "lingo/log",
    initialState,
    reducers: {},
});

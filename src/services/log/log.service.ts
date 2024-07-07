import { api } from "@/config/axios";
import { LogRequest, LogResponse } from "./log.types";

export const logService = {
    log: async (body: LogRequest) => {
        const response = await api.post<LogResponse>(`/log`, body);
    },
};

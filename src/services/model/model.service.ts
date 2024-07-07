import { api } from "@/config/axios";
import { ReadModelsResponse } from "./model.types";

export const modelService = {
    readModels: async () => {
        const response = await api.get<ReadModelsResponse>(`/model`);
        return response.data.data;
    },
};

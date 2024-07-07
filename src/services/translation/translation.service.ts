import { api } from "@/config/axios";
import { TranslationRequest, TranslationResponse } from "./translation.types";

export const translationService = {
    translate: async (body: TranslationRequest) => {
        const response = await api.post<TranslationResponse>(`/translation`, body);
        console.log(response);
        return response.data.data;
    },
};

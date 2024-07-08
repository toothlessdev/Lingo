import { api } from "@/config/axios";
import { SuggestionRequest, SuggestionResponse } from "./suggestion.types";

export const suggestionService = {
    suggestion: async (body: SuggestionRequest) => {
        const response = await api.post<SuggestionResponse>(`/suggestion`, body);
        return response.data.data;
    },
};

import { BaseResponse } from "../common/types";

export type SuggestionRequest = {
    model: string;
    targetWord: string;
    sentence: boolean;
    contextLen: number;
    text: string;
    abbreviation: boolean;
};

export type SuggestionResponse = BaseResponse<{
    suggestions: string[];
}>;

import { BaseResponse } from "../common/types";

export type SuggestionRequest = {
    suggestionModel: string;
    targetWord: string;
    lan: string;
    sentence: boolean;
    contextLen: number;
    text: string;
    abbreviation: boolean;
};

export type SuggestionResponse = BaseResponse<{
    suggestions: string[];
}>;

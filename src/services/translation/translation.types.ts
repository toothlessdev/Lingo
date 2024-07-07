import { BaseResponse } from "../common/types";

export type TranslationRequest = {
    service: string;
    query: string;
    sourceLan: string;
    targetLan: string;
    kwargs: object;
};

export type TranslationResponse = BaseResponse<{
    score: number;
    translatedResult: string;
}>;

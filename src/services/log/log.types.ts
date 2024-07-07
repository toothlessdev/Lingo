import { languages } from "@/constants/languages";
import { BaseResponse } from "../common/types";

export interface ISuggestionLog {
    suggestionModel: string;
    targetWord: number;
    sentence: boolean;
    cntxtLen: number;
    text: string;
    abbreviation: boolean;
    suggestionList: string[];
    selectedSuggestion: string;
}

export interface IEvaluationLog {
    job: string;
    grade: number;
    feedback: string;
}

export interface ILog {
    translationModel: string;
    targetText: string;
    sourceLan: string;
    targetLan: string;
    translatedText: string;
    evaluation?: IEvaluationLog;
    suggestions?: ISuggestionLog[];
}

export type LogRequest = {
    session: ILog[];
};

export type LogResponse = BaseResponse<{
    status: number;
    message: string;
    data: object;
}>;

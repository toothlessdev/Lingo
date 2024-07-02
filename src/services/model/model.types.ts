import { BaseResponse } from "../common/types";

export type Models = {
    models: {
        translationModel: string[];
        suggestionModel: string[];
    };
};

export type ReadModelsResponse = BaseResponse<{
    models: {
        translationModel: string[];
        suggestionModel: string[];
    };
}>;

import { useQuery } from "@tanstack/react-query";
import { Button } from "../form/Button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./DropDown";
import { suggestionService } from "@/services/suggestion/suggestion.service";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { logActions } from "@/store/log.slice";

export interface ITranslatedWord {
    targetLan: string;
    word: string;
    sentence: string;
    suggestionModel: string;
}

export const TranslatedWord: React.FC<ITranslatedWord> = ({ word, targetLan, sentence, suggestionModel }) => {
    const dispatch: Dispatch = useDispatch();

    const [targetWord, setTargetWord] = useState<string>(word);

    const { isPending, data } = useQuery({
        queryKey: ["translation", { word, sentence, suggestionModel }],
        queryFn: () =>
            suggestionService.suggestion({
                suggestionModel,
                lan: targetLan,
                targetWord: word,
                sentence: true,
                contextLen: 0,
                text: sentence,
                abbreviation: true,
            }),
        staleTime: 60 * 10,
    });

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="w-fit">
                <Button variant="ghost" className="p-1 h-fit">
                    {targetWord}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {isPending === false ? (
                    data?.suggestions.map((suggestionWord) => {
                        return (
                            <DropdownMenuItem
                                key={suggestionWord}
                                onClick={() => {
                                    setTargetWord(suggestionWord);
                                    dispatch(
                                        logActions.addSuggestionLog({
                                            suggestion: {
                                                suggestionModel,
                                                targetWord: 0,
                                                sentence: true,
                                                cntxtLen: 0,
                                                text: sentence,
                                                abbreviation: false,
                                                suggestionList: data.suggestions,
                                                selectedSuggestion: suggestionWord,
                                            },
                                        })
                                    );
                                }}
                            >
                                {suggestionWord}
                            </DropdownMenuItem>
                        );
                    })
                ) : (
                    <DropdownMenuItem>Loading...</DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

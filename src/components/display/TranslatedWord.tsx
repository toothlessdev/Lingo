import { useQuery } from "@tanstack/react-query";
import { Button } from "../form/Button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./DropDown";
import { suggestionService } from "@/services/suggestion/suggestion.service";
import { SuggestionResponse } from "@/services/suggestion/suggestion.types";
import { useCallback, useState } from "react";

export interface ITranslatedWord {
    word: string;
    sentence: string;
    suggestionModel: string;
}

export const TranslatedWord: React.FC<ITranslatedWord> = ({ word, sentence, suggestionModel }) => {
    const [targetWord, setTargetWord] = useState<string>(word);

    const { isPending, data } = useQuery({
        queryKey: ["translation", { word, sentence, suggestionModel }],
        queryFn: () =>
            suggestionService.suggestion({
                model: suggestionModel,
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
                            <DropdownMenuItem key={suggestionWord} onClick={() => setTargetWord(suggestionWord)}>
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
import { useCallback, useRef, useState } from "react";
import { useDebouncedInput } from "@/hooks/useDebouncedInput";
import { translationService } from "@/services/translation/translation.service";
import { toast } from "react-toastify";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { logActions } from "@/store/log.slice";

export const useTranslation = () => {
    const dispatch: Dispatch = useDispatch();

    const [isPending, setIsPending] = useState<boolean>(false);
    const [srcLang, setSrcLang] = useState<string>("en");
    const [destLang, setDestLang] = useState<string>("ko");
    const [translationModel, setTranslationModel] = useState<string>("");
    const [suggestionModel, setSuggestionModel] = useState<string>("");

    const { inputRef, handleChange, debouncedValue } = useDebouncedInput(500);
    const [translatedResult, setTranslatedResult] = useState<string[]>([]);
    const outputRef = useRef<HTMLTextAreaElement>(null);

    const handleSrcLangChange = useCallback((value: string) => {
        setSrcLang(value);
    }, []);

    const handleDestLangChange = useCallback((value: string) => {
        setDestLang(value);
    }, []);

    const handleTranslateModelChange = useCallback((value: string) => {
        setTranslationModel(value);
    }, []);

    const handleSuggestionModelChange = useCallback((value: string) => {
        setSuggestionModel(value);
    }, []);

    const handleTranslate = useCallback(async () => {
        if (translationModel === "") {
            toast.error("Select Translation Model");
            return;
        }
        if (suggestionModel === "") {
            toast.error("Select Suggestion Model");
            return;
        }
        if (debouncedValue === "") {
            toast.error("Please enter the content you want to translate");
            return;
        }

        const translationRequest = () => {
            setTranslatedResult([]);
            return translationService.translate({
                service: translationModel,
                query: debouncedValue,
                sourceLan: srcLang,
                targetLan: destLang,
                kwargs: {},
            });
        };

        await toast
            .promise(translationRequest, {
                pending: "Translating...",
                success: "Translation Success!",
                error: "Translation Failed!",
            })
            .then((response) => {
                setTranslatedResult([...response.translatedResult.split(" ")]);
                dispatch(
                    logActions.addLog({
                        translationModel,
                        targetText: inputRef.current?.value as string,
                        sourceLan: srcLang,
                        targetLan: destLang,
                        translatedText: response.translatedResult,
                    })
                );
            })
            .finally(() => {
                setIsPending(false);
            });
    }, [translationModel, suggestionModel, debouncedValue, srcLang, destLang, dispatch, inputRef]);

    return {
        srcLang,
        destLang,
        isPending,
        inputRef,
        outputRef,
        handleSrcLangChange,
        handleDestLangChange,
        handleTranslateModelChange,
        handleSuggestionModelChange,
        handleInputChange: handleChange,
        translatedResult,
        setTranslatedResult,
        handleTranslate,
        translationModel,
        suggestionModel,
    };
};

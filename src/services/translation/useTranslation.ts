import { useCallback, useRef, useState } from "react";
import { translationService } from "@/services/translation/translation.service";
import { toast } from "react-toastify";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { logActions } from "@/store/log.slice";
import { logService } from "../log/log.service";
import { RootState } from "@/store/store";

export const useTranslation = () => {
    const { logs } = useSelector((state: RootState) => state.log);
    const dispatch: Dispatch = useDispatch();

    const [isPending, setIsPending] = useState<boolean>(false);
    const [srcLang, setSrcLang] = useState<string>("en");
    const [destLang, setDestLang] = useState<string>("ko");
    const [translationModel, setTranslationModel] = useState<string>("");
    const [suggestionModel, setSuggestionModel] = useState<string>("");

    const [translatedResult, setTranslatedResult] = useState<string[]>([]);

    const inputRef = useRef<HTMLTextAreaElement>(null);
    const outputRef = useRef<HTMLTextAreaElement>(null);
    const jobRef = useRef<HTMLInputElement>(null);
    const feedbackRef = useRef<HTMLTextAreaElement>(null);

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
        if (!inputRef.current) throw new Error("inputRef is not defined");

        if (translationModel === "") {
            toast.error("Select Translation Model");
            return;
        }
        if (suggestionModel === "") {
            toast.error("Select Suggestion Model");
            return;
        }
        if (inputRef.current.value === "") {
            toast.error("Please enter the content you want to translate");
            return;
        }

        const translationRequest = () => {
            setTranslatedResult([]);
            return translationService.translate({
                service: translationModel,
                query: inputRef.current?.value as string,
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
    }, [translationModel, suggestionModel, srcLang, destLang, dispatch, inputRef]);

    const handleFeedbackLogSubmit = useCallback(
        async (raiting: number) => {
            if (!feedbackRef.current || !jobRef.current) throw new Error("feedbackRef, jobRef is undefined");

            if (feedbackRef.current.value === "") {
                toast.error("Please enter your feedback!");
                return;
            }
            if (jobRef.current.value === "") {
                toast.error("Please enter your job!");
                return;
            }

            dispatch(
                logActions.addFeedbackLog({
                    evaluation: {
                        job: jobRef.current?.value as string,
                        grade: raiting,
                        feedback: feedbackRef.current?.value as string,
                    },
                })
            );

            const logRequest = () => {
                return logService.log({
                    session: [...logs],
                });
            };
            await toast
                .promise(logRequest, {
                    pending: "Saving Feedback and Sending Logs...",
                    success: "Log Send Successfully!",
                    error: "Log Send Failed!",
                })
                .then(() => {
                    if (!jobRef.current || !feedbackRef.current || !inputRef.current)
                        throw new Error("feedbackRef, jobRef, inputRef is undefined");
                    jobRef.current.value = "";
                    feedbackRef.current.value = "";
                    inputRef.current.value = "";
                    setTranslatedResult([]);
                });
        },
        [dispatch, logs]
    );

    return {
        isPending,

        srcLang,
        destLang,

        inputRef,
        outputRef,
        jobRef,
        feedbackRef,

        handleSrcLangChange,
        handleDestLangChange,
        handleTranslateModelChange,
        handleSuggestionModelChange,
        handleFeedbackLogSubmit,

        translatedResult,
        setTranslatedResult,
        handleTranslate,
        translationModel,
        suggestionModel,
    };
};

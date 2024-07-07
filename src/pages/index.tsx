import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/form/Select";
import { Label } from "@/components/form/Label";
import { Textarea } from "@/components/form/TextArea";
import { Button } from "@/components/form/Button";
import { StarIcon } from "@/assets/StarIcon";
import { modelService } from "@/services/model/model.service";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Models } from "@/services/model/model.types";
import { languages } from "@/constants/languages";
import { useTranslation } from "@/services/translation/useTranslation";
import { TranslationResult } from "@/components/display/TranslationResult";
import { HistoryList } from "@/components/display/HistoryList";
import { useCallback, useRef } from "react";

import { TranslatedWord } from "@/components/display/TranslatedWord";
import { Input } from "@/components/form/Input";
import { logService } from "@/services/log/log.service";
import { toast } from "react-toastify";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { logActions } from "@/store/log.slice";
import { RootState } from "@/store/store";

export default function Translate(props: InferGetStaticPropsType<typeof getStaticProps>) {
    const { logs } = useSelector((state: RootState) => state.log);
    const dispatch: Dispatch = useDispatch();

    const jobRef = useRef<HTMLInputElement | null>(null);
    const feedbackRef = useRef<HTMLTextAreaElement | null>(null);

    const {
        inputRef,
        translatedResult,
        handleSrcLangChange,
        handleDestLangChange,
        handleTranslateModelChange,
        handleSuggestionModelChange,
        handleTranslate,
        suggestionModel,
        setTranslatedResult,
    } = useTranslation();

    const handleSubmit = useCallback(async () => {
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
                    grade: 0,
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
    }, [dispatch, logs, inputRef, setTranslatedResult]);

    return (
        <div className="w-full max-w-[1200px] mx-auto p-8 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8 ">
                <div className="grid md:grid-cols-4 gap-2">
                    <div className="grid gap-2">
                        <Label htmlFor="translation-model">Translation Model</Label>
                        <Select defaultValue="default" onValueChange={(value) => handleTranslateModelChange(value)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select translation model" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="default">Select Translation Model</SelectItem>
                                {props.models.models.translationModel.map((model, index) => {
                                    return (
                                        <SelectItem value={model} key={index}>
                                            {model}
                                        </SelectItem>
                                    );
                                })}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="suggestion-model">Suggestion Model</Label>
                        <Select defaultValue="default" onValueChange={(value) => handleSuggestionModelChange(value)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select translation model" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="default">Select Suggestion Model</SelectItem>
                                {props.models.models.suggestionModel.map((model, index) => {
                                    return (
                                        <SelectItem value={model} key={index}>
                                            {model}
                                        </SelectItem>
                                    );
                                })}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="source-language">Source Language</Label>
                        <Select defaultValue="en" onValueChange={handleSrcLangChange}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select source language" />
                            </SelectTrigger>
                            <SelectContent>
                                {Object.entries(props.lang).map(([key, value], index) => {
                                    return (
                                        <SelectItem value={value} key={index}>
                                            {key}
                                        </SelectItem>
                                    );
                                })}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="dest-language">Destination Language</Label>
                        <Select defaultValue="ko" onValueChange={handleDestLangChange}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select destination language" />
                            </SelectTrigger>
                            <SelectContent>
                                {Object.entries(props.lang).map(([key, value], index) => {
                                    return (
                                        <SelectItem value={value} key={index}>
                                            {key}
                                        </SelectItem>
                                    );
                                })}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="grid gap-2">
                    <Label htmlFor="input-text">Input Text</Label>
                    <Textarea
                        ref={inputRef}
                        className="resize-none h-[120px]"
                        id="input-text"
                        placeholder="Enter text to translate..."
                        rows={5}
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="output-text">Translated Text</Label>
                    <TranslationResult id="output-text" className="h-[120px]">
                        {translatedResult &&
                            translatedResult.map((word, index) => {
                                return (
                                    <div key={index}>
                                        <TranslatedWord
                                            word={word}
                                            sentence={translatedResult.join(" ")}
                                            suggestionModel={suggestionModel}
                                        />
                                    </div>
                                );
                            })}
                    </TranslationResult>
                </div>
            </div>
            <div className="w-full">
                <Button className="ml-auto my-3 block" type="submit" onClick={handleTranslate}>
                    Translate
                </Button>
            </div>
            <div className="grid gap-6 mt-8">
                <div className="grid gap-2">
                    <Label htmlFor="feedback">Feedback</Label>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                            <div className="flex items-center gap-1">
                                <Input ref={jobRef} type="text" placeholder="Your Job" className="mr-3"></Input>
                            </div>
                            <StarIcon className="w-5 h-5 fill-yellow-500" />
                            <StarIcon className="w-5 h-5 fill-yellow-500" />
                            <StarIcon className="w-5 h-5 fill-yellow-500" />
                            <StarIcon className="w-5 h-5 fill-gray-300" />
                            <StarIcon className="w-5 h-5 fill-gray-300" />
                        </div>
                        <span className="text-sm text-gray-500">3 out of 5</span>
                    </div>
                    <Textarea
                        ref={feedbackRef}
                        className="resize-none"
                        id="feedback"
                        placeholder="Provide feedback on the translation quality..."
                        rows={5}
                    />
                    <Button className="ml-auto" type="submit" onClick={handleSubmit}>
                        Submit Feedback
                    </Button>
                </div>
            </div>
            <HistoryList />
        </div>
    );
}

export const getStaticProps = (async () => {
    const models = await modelService.readModels();
    return {
        props: { models: { ...models }, lang: languages },
        revalidate: 60 * 3,
    };
}) satisfies GetStaticProps<{ models: Models; lang: typeof languages }>;

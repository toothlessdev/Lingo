import { TrashIcon } from "@/assets/TrashIcon";
import { Button } from "../form/Button";
import { Textarea } from "../form/TextArea";
import { History } from "./History";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useCallback } from "react";
import { logActions } from "@/store/log.slice";

export const HistoryList = () => {
    const dispatch = useDispatch();
    const { logs } = useSelector((state: RootState) => state.log);

    const clearHistory = useCallback(() => {
        console.log("clear");
        dispatch(logActions.clearLog());
    }, [dispatch]);

    return (
        <div className="my-5 bg-gray-50 rounded-lg flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium">Translation History</h2>
                <Button variant="ghost" size="icon" onClick={clearHistory}>
                    <TrashIcon className="w-5 h-5" />
                    <span className="sr-only">Clear history</span>
                </Button>
            </div>
            <div className="space-y-4 overflow-auto flex-1">
                {logs &&
                    logs.map((log, index) => {
                        return (
                            <History
                                key={index}
                                translationModel={log.translationModel}
                                srcLang={log.sourceLan}
                                destLang={log.targetLan}
                                targetSentence={log.targetText}
                                translatedSentence={log.translatedText}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export interface IHistory {
    translationModel: string;

    srcLang: string;
    destLang: string;

    targetSentence: string;
    translatedSentence: string;
}

export const History: React.FC<IHistory> = ({
    translationModel,
    srcLang,
    destLang,
    targetSentence,
    translatedSentence,
}) => {
    return (
        <div className="grid gap-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div>
                        <p className="font-medium">{translationModel}</p>
                        <p className="text-sm text-gray-500">{`Translated from ${srcLang.toUpperCase()} to ${destLang.toUpperCase()}`}</p>
                    </div>
                </div>
                {/* <div className="text-sm text-gray-500">{time}</div> */}
            </div>
            <p>{targetSentence}</p>
            <p>{translatedSentence}</p>
        </div>
    );
};

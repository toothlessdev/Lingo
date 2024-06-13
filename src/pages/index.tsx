import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/form/Select";
import { Label } from "@/components/form/Label";
import { Textarea } from "@/components/form/TextArea";
import { Button } from "@/components/form/Button";
import { StarIcon } from "@/assets/StarIcon";

export default function translate() {
    return (
        <div className="w-full max-w-[1200px] mx-auto p-8 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8 ">
                <div className="grid md:grid-cols-3 gap-2">
                    <div className="grid gap-2">
                        <Label htmlFor="language-model">Translation Model</Label>
                        <Select defaultValue="google">
                            <SelectTrigger>
                                <SelectValue placeholder="Select translation model" />
                            </SelectTrigger>
                            <SelectContent className="asdfasdf">
                                <SelectItem value="google">Google Translate</SelectItem>
                                <SelectItem value="deepl">DeepL</SelectItem>
                                <SelectItem value="microsoft">Microsoft Translator</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="source-language">Source Language</Label>
                        <Select defaultValue="en" name="source-language">
                            <SelectTrigger>
                                <SelectValue placeholder="Select source language" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="en">English</SelectItem>
                                <SelectItem value="es">Spanish</SelectItem>
                                <SelectItem value="fr">French</SelectItem>
                                <SelectItem value="de">German</SelectItem>
                                <SelectItem value="zh">Chinese</SelectItem>
                                <SelectItem value="ja">Japanese</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="dest-language">Destination Language</Label>
                        <Select defaultValue="es" name="dest-language">
                            <SelectTrigger>
                                <SelectValue placeholder="Select destination language" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="en">English</SelectItem>
                                <SelectItem value="es">Spanish</SelectItem>
                                <SelectItem value="fr">French</SelectItem>
                                <SelectItem value="de">German</SelectItem>
                                <SelectItem value="zh">Chinese</SelectItem>
                                <SelectItem value="ja">Japanese</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="grid gap-2">
                    <Label htmlFor="input-text">Input Text</Label>
                    <Textarea
                        className="resize-none"
                        id="input-text"
                        placeholder="Enter text to translate..."
                        rows={5}
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="output-text">Translated Text</Label>
                    <Textarea
                        className="resize-none"
                        id="output-text"
                        placeholder="Translated text will appear here..."
                        readOnly
                        rows={5}
                    />
                </div>
            </div>
            <div className="grid gap-6 mt-8">
                <div className="grid gap-2">
                    <Label htmlFor="word-suggestions">Word Suggestions</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        <Button variant="outline">Suggest 1</Button>
                        <Button variant="outline">Suggest 2</Button>
                        <Button variant="outline">Suggest 3</Button>
                        <Button variant="outline">Suggest 4</Button>
                        <Button variant="outline">Suggest 5</Button>
                        <Button variant="outline">Suggest 6</Button>
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="feedback">Feedback</Label>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                            <StarIcon className="w-5 h-5 fill-yellow-500" />
                            <StarIcon className="w-5 h-5 fill-yellow-500" />
                            <StarIcon className="w-5 h-5 fill-yellow-500" />
                            <StarIcon className="w-5 h-5 fill-gray-300" />
                            <StarIcon className="w-5 h-5 fill-gray-300" />
                        </div>
                        <span className="text-sm text-gray-500">3 out of 5</span>
                    </div>
                    <Textarea
                        className="resize-none"
                        id="feedback"
                        placeholder="Provide feedback on the translation quality..."
                        rows={5}
                    />
                    <Button className="ml-auto" type="submit">
                        Submit Feedback
                    </Button>
                </div>
            </div>
        </div>
    );
}

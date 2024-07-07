import { ChangeEvent, useCallback, useRef, useState } from "react";

export const useInput = <T extends HTMLInputElement | HTMLTextAreaElement>() => {
    const inputRef = useRef<T | null>(null);
    const [value, setValue] = useState<string>("");

    const handleChange = useCallback((e: ChangeEvent<T>) => {
        setValue(e.target.value);
    }, []);

    return { inputRef, handleChange, value, setValue };
};

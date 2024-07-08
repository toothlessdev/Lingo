import { useEffect } from "react";
import { useDebounce } from "./useDebounce";
import { useInput } from "./useInput";

export const useDebouncedInput = (delay: number) => {
    const { inputRef, handleChange, value } = useInput<HTMLTextAreaElement>();
    const { debouncedValue } = useDebounce(value, delay);

    return { inputRef, handleChange, debouncedValue };
};

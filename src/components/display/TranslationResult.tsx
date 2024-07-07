import { cn } from "@/styles/utils";
import { ComponentProps, forwardRef } from "react";

export interface ITranslationResult extends ComponentProps<"div"> {
    className?: string;
    children: React.ReactNode;
}

// eslint-disable-next-line react/display-name
export const TranslationResult = forwardRef<HTMLDivElement, ITranslationResult>(
    ({ className, children, ...rest }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "flex w-full h-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ",
                    className
                )}
                {...rest}
            >
                {children}
            </div>
        );
    }
);

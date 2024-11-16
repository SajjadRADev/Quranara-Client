import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/libs/cn";

const button = cva("flex items-center gap-x-1 child:shrink-0 select-none transition-colors", {
    variants: {
        variant: {
            "filled-primary": "bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-400",
            "filled-secondary": "bg-amber-400 text-white hover:bg-amber-500 disabled:bg-amber-300",
            "text-primary": "text-blue-500 hover:bg-blue-500 hover:text-white",
            "text-secondary": "text-amber-400 hover:bg-amber-400 hover:text-white",
            "neutral-primary": "bg-blue-50 dark:bg-blue-500/10 text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-500/15 disabled:bg-blue-100 dark:disabled:bg-blue-500/15",
            "neutral-secondary": "bg-amber-50 dark:bg-amber-400/10 text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-400/15 disabled:bg-amber-100 dark:disabled:bg-amber-400/15",
            "neutral-base": "bg-gray-100 dark:bg-gray-500/10 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500/15 disabled:bg-gray-200 dark:disabled:bg-gray-500/15",
        },

        size: {
            sm: "text-sm py-2.5 px-4 h-11",
            base: "py-2.5 px-4.5 h-11",
            lg: "text-md py-3 px-5 h-12",
            circle: "p-3 h-12",
        },

        rounded: {
            base: "rounded-lg",
            lg: "rounded-2xl",
            full: "rounded-full",
        },
    },

    defaultVariants: {
        size: "base",
        rounded: "base",
    },
});

type ButtonProps = VariantProps<typeof button> & React.ComponentProps<"button">;

function Button({ children, className, variant = "filled-primary", size = "base", rounded = "base", ...props }: ButtonProps) {
    return (
        <button className={cn(button({ variant, size, rounded }), className)} {...props}>
            {children}
        </button>
    );
}

export default Button;

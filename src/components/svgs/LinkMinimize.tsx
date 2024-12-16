import { SvgComponentProps } from "@/types/component.types";

function LinkMinimize({ className = "w-6", strokeWidth = 1.5 }: SvgComponentProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.99991 11.9999H14.9999" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M9 18H8C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6H9" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M15 6H16C19.3137 6 22 8.68629 22 12M15 18H16C17.2267 18 18.3675 17.6318 19.3178 17" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
        </svg>
    );
}

export default LinkMinimize;

import { SvgComponentProps } from "@/types/component.types";

function DoubleArrowRight({ className = "w-6", strokeWidth = 1.5 }: SvgComponentProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19L17 12L15.5 10.25M11 5L13 7.33333" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 5L13 12L11.5 13.75M7 19L9 16.6667" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default DoubleArrowRight;

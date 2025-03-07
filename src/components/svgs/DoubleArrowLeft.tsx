import { SvgComponentProps } from "@/types/component.types";

function DoubleArrowLeft({ className = "w-6", strokeWidth = 1.5 }: SvgComponentProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 19L7 12L8.5 10.25M13 5L11 7.33333" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 5L11 12L12.5 13.75M17 19L15 16.6667" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default DoubleArrowLeft;

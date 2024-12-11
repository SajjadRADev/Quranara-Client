import { SvgComponentProps } from "@/types/component.types";

function Card({ className = "w-6", strokeWidth = 1.5 }: SvgComponentProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C21.4816 18.1752 21.7706 17.3001 21.8985 16" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M10 16H6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M14 16H12.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M2 10L7 10M22 10L11 10" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
        </svg>
    );
}

export default Card;

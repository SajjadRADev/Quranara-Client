import { SvgComponentProps } from "@/types/component.types";

function CircleTopDown({ className = "w-6", strokeWidth = 1.5 }: SvgComponentProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 3L12 12M12 12H17.3438M12 12V6.65625" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17M22 12C22 17.5228 17.5228 22 12 22C10.1786 22 8.47087 21.513 7 20.6622" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
        </svg>
    );
}

export default CircleTopDown;

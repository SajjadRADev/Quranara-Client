import { SvgComponentProps } from "@/types/component.types";

function UserCheckRounded({ className = "w-6", strokeWidth = 1.5 }: SvgComponentProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx={12} cy={6} r={4} stroke="currentColor" strokeWidth={strokeWidth} />
            <path d="M12 13C14.6083 13 16.8834 13.8152 18.0877 15.024M15.5841 20.4366C14.5358 20.7944 13.3099 21 12 21C8.13401 21 5 19.2091 5 17C5 15.6407 6.18652 14.4398 8 13.717" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M18 18.5C18.3905 18.8905 18.6095 19.1095 19 19.5L21 17" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default UserCheckRounded;

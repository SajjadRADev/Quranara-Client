import { SvgComponentProps } from "@/types/component.types";

function NotificationUnreadLines({ className = "w-5", strokeWidth = 1.25 }: SvgComponentProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx={19} cy={5} r={3} stroke="currentColor" strokeWidth={strokeWidth} />
            <path d="M7 14H16" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M7 17.5H13" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12V10.5M13.5 2H12C7.28595 2 4.92893 2 3.46447 3.46447C2.49073 4.43821 2.16444 5.80655 2.0551 8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
        </svg>
    );
}

export default NotificationUnreadLines;

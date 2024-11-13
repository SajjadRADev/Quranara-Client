import { cn } from "@/libs/cn";

type LogoProps = React.ComponentProps<"svg">;

function Logo({ className = "" }: LogoProps) {
    return (
        <svg className={cn("fill-gray-700 dark:fill-gray-50", className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 552 230">
            <path d="M.18,32l20-2.2.2,147.6-18.8,1.4Z" />
            <path d="M66.38,196.84q13.61-11,13.6-32.4a96.08,96.08,0,0,0-3-22.1q-3-12.5-8.8-29.1l19.4-9.2q11.81,35.8,11.8,57.6,0,32.6-18.7,50.3t-55.5,16.3l-.8-19.8Q52.78,207.84,66.38,196.84Z" />
            <path d="M149,45.84q-6.79,0-18.6-3.8l-4.7-1.6a49.89,49.89,0,0,0-5.9-1.7,21.19,21.19,0,0,0-4.2-.5,5.62,5.62,0,0,0-4.7,1.9,20.86,20.86,0,0,0-2.9,6.7L98.58,45q1-10.8,5.4-16t13-5.2q5,0,15,3.2,2,.6,7.8,2.5a31.1,31.1,0,0,0,8.8,1.9q3.4,0,4.8-1.6a14,14,0,0,0,2.4-5.6L165,26Q163.38,45.84,149,45.84Zm-26.8,9.6,19.8-2,.2,123-18.8.6Z" />
            <path d="M178.38,216.44Q164,203.24,164,181a118.85,118.85,0,0,1,3.9-28.9,284.45,284.45,0,0,1,11.3-34.3l16.2,6q-11.81,34-11.8,52.8,0,13,9.7,20.9t28.7,7.9a99.56,99.56,0,0,0,23.8-2.9,49.23,49.23,0,0,0,19.9-9.6,21.43,21.43,0,0,0,8.1-17.3q0-10-3.1-27.4a358.44,358.44,0,0,0-8.3-35.6l19.2-8q6,23.6,9,40.9a147.59,147.59,0,0,1,2.4,31.3q-1,25.2-20.1,39.2t-53.5,13.8Q192.79,229.63,178.38,216.44Zm30.8-125.8v-1l12.4-14.8h1L238,87.64v1l-12.4,14.8h-1Z" />
            <path d="M338.78,45.84q-6.79,0-18.6-3.8l-4.7-1.6a49.89,49.89,0,0,0-5.9-1.7,21.19,21.19,0,0,0-4.2-.5,5.62,5.62,0,0,0-4.7,1.9,20.86,20.86,0,0,0-2.9,6.7l-9.4-1.8q1-10.8,5.4-16t13-5.2q5,0,15,3.2,2,.6,7.8,2.5a31.1,31.1,0,0,0,8.8,1.9q3.4,0,4.8-1.6a14,14,0,0,0,2.4-5.6l9.2,1.8Q353.17,45.84,338.78,45.84ZM312,55.44l19.8-2,.2,123-18.8.6Z" />
            <path d="M356,208.84q26.2-2,38.7-12.9t12.5-31.5a111.78,111.78,0,0,0-2.6-22.5q-2.59-12.49-7.6-29.5l19.6-8.2,4.6,19q3,12.6,6.5,18.7a18.81,18.81,0,0,0,9.6,8.5q6.11,2.4,17.3,2.4a11.37,11.37,0,0,1,8.3,3.5,11.59,11.59,0,0,1,3.5,8.5,11.85,11.85,0,0,1-3.6,8.5,11.14,11.14,0,0,1-8.2,3.7q-19.2,0-28.8-8.8-1.2,23.59-12.8,38.4-17.21,21.6-55,21.6h-5.8l-.6-19.2A36.07,36.07,0,0,1,356,208.84Z" />
            <path d="M446.28,156.34a11.59,11.59,0,0,1,8.5-3.5q21.8,0,37.7-.8t24.3-4.2q8.4-3.19,11.5-7.7t3.5-13.5a54.1,54.1,0,0,1-15.1,5.1,94.44,94.44,0,0,1-18.1,1.7q-16.6,0-24-6.8t-7.4-22.6q0-24,9.8-40t29.2-16a35.77,35.77,0,0,1,23.6,8.5Q540,65,545.68,80.64t5.7,36.4q0,21.79-6.8,34.6-7,12.8-24.4,18.8a96.68,96.68,0,0,1-26.7,5.5q-14.89,1.09-38.7,1.1a11.35,11.35,0,0,1-8.4-3.7,11.85,11.85,0,0,1-3.6-8.5A11.59,11.59,0,0,1,446.28,156.34ZM473,17.64l12-14.2h1l15,12.4v.8l-12,14.6h-1l-15-12.4Zm16.7,91.3q3.9,2.9,14.1,2.9a102.06,102.06,0,0,0,13.9-1,53.16,53.16,0,0,0,13.1-3.4q-4.2-36.79-25.2-36.8-10.8,0-15.3,8.6a42.53,42.53,0,0,0-4.5,20Q485.78,106,489.68,108.94ZM501,14.44,513,0h1l15,12.4v1l-12,14.4h-1l-15-12.4Z" />
        </svg>
    );
}

export default Logo;

import { SvgComponentProps } from "@/types/component.types";

function MapArrowLeft({ className = "w-6", strokeWidth = 1.5 }: SvgComponentProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 7.40261L2.99281 10.5275C1.66906 11.1178 1.66906 12.8822 2.99281 13.4725L19.5025 20.835C20.9984 21.5021 22.5499 20.0209 21.809 18.6331L18.657 12.7294C18.4118 12.2702 18.4118 11.7298 18.657 11.2706L21.809 5.36689C22.5499 3.97914 20.9984 2.49789 19.5025 3.16496L14.7513 5.28379" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
        </svg>
    );
}

export default MapArrowLeft;

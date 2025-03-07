import { FieldError } from "react-hook-form";

type DetailsProps = { error: FieldError | undefined; caption?: string };

function FormDetails({ error, caption }: DetailsProps) {
    return <>{error ? <span className="text-sm text-red-500 leading-7">{error.message}</span> : caption && <span className="text-sm text-gray-600 dark:text-gray-400 leading-7">{caption}</span>}</>;
}

export default FormDetails;

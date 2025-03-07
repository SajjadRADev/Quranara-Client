import { useCallback } from "react";
import { useController, FieldValues, Control, Path } from "react-hook-form";

import { cn } from "@/libs/cn";
import { persianToEnglish } from "@/libs/funcs";

import FormDetails from "./FormDetails";

interface TextFieldProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    label: string;
    placeholder?: string;
    caption?: string;
    className?: string;
    inputClassName?: string;
    children?: React.ReactNode;
}

function NumericField<T extends FieldValues>({ children, name, control, label, placeholder, caption, className, inputClassName }: TextFieldProps<T>) {
    const {
        field,
        fieldState: { error },
    } = useController({ name: name as Path<T>, control });

    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            e.target.value = persianToEnglish(e.target.value);
            field.onChange(e);
        },
        [field]
    );

    return (
        <div className={cn("flex flex-col gap-y-2", className)}>
            <label htmlFor={name as string} className="font-pelak-medium text-sm text-gray-800 dark:text-gray-200">
                {label}
            </label>
            <div className="relative text-gray-500">
                <input {...field} onChange={onChange} type="number" pattern="/0-9\u06F0-\u06F9/" placeholder={placeholder} id={name as string} className={cn("p-4 w-full bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-200 border border-gray-100 dark:border-gray-800 focus:border-gray-200 dark:focus:border-gray-700 rounded-xl placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-colors", inputClassName)} />
                <div className="flex-center absolute left-4 top-0 bottom-0 m-auto">{children}</div>
            </div>
            <FormDetails error={error} caption={caption} />
        </div>
    );
}

export default NumericField;

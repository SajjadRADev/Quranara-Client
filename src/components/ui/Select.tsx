import { createContext, useContext, startTransition } from "react";

import { cn } from "@/libs/cn";

import ArrowDown from "../svgs/ArrowDown";
import useToggle from "@/hooks/useToggle";
import useEffectState from "@/hooks/useEffectState";

type SelectContextProps = { handleSelect: (value: string, text: string) => void };

const SelectContext = createContext<SelectContextProps>({ handleSelect: () => {} });

interface SelectProps {
    label?: string;
    value?: string;
    defaultText?: string;
    onSelect: (value: string) => void;
    placeholder?: string;
    className?: string;
    selectClassName?: string;
    children: React.ReactNode;
}

interface SelectItemProps {
    value: string;
    text: string;
    className?: string;
    children: React.ReactNode;
}

function Select({ children, value = "", defaultText = "", onSelect, label, placeholder = "لطفا یک گزینه را انتخاب کنید", className, selectClassName }: SelectProps) {
    const [text] = useEffectState<string>(value || defaultText);

    const { ref, toggleOpen, isOpen } = useToggle();

    const handleSelect = (value: string) => {
        startTransition(() => {
            onSelect(value);
            toggleOpen();
        });
    };

    return (
        <div ref={ref} className={cn("flex flex-col gap-y-2 relative font-pelak-medium", className)}>
            {label && <span className="text-sm text-gray-800 dark:text-gray-200">{label}</span>}
            <div onClick={toggleOpen} className="flex items-center justify-between p-4 w-full bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 rounded-xl cursor-pointer transition-colors">
                <span className="font-pelak text-gray-600 dark:text-gray-200">{text || placeholder}</span>
                <ArrowDown className="w-5" />
            </div>
            <div className={cn("absolute top-full flex flex-col gap-y-1 py-2 px-1 w-full max-h-64 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700/50 rounded-xl overflow-auto with-custom-scroll invisible opacity-0 mt-4 transition-all duration-300 z-20", selectClassName, isOpen && "visible opacity-100 mt-2")}>
                <SelectContext.Provider value={{ handleSelect }}>{children}</SelectContext.Provider>
            </div>
        </div>
    );
}

export function SelectItem({ children, className, value, text }: SelectItemProps) {
    const { handleSelect } = useContext(SelectContext);

    return (
        <div onClick={() => handleSelect(value, text)} className={cn("flex items-center gap-x-2 p-4 text-gray-700 dark:text-gray-300 hover:gray-light dark:hover:gray-light rounded-xl cursor-pointer transition-colors duration-300", className)}>
            {children}
        </div>
    );
}

export default Select;

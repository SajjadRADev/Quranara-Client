"use client";

import { createContext, useState, useContext, startTransition } from "react";

import { cn } from "@/libs/cn";

type TabsContextProps<> = { active: any; onTab: (tab: any) => void };

const TabsContenxt = createContext<TabsContextProps>({ active: "", onTab: () => {} });

type TabsProps<T> = { defaultValue: T; onChangeTab: (tab: T) => void } & React.ComponentProps<"div">;

type TabsItemProps = { value: string; activeTabClassName?: string } & React.ComponentProps<"div">;

function Tabs<T = string>({ children, defaultValue, onChangeTab = () => {}, className }: TabsProps<T>) {
    const [tab, setTab] = useState<T>(defaultValue);

    const onTab = (tab: T) => {
        startTransition(() => {
            setTab(tab);
            onChangeTab(tab);
        });
    };

    return (
        <div className={cn("flex items-center gap-x-2", className)}>
            <TabsContenxt.Provider value={{ active: tab, onTab }}>{children}</TabsContenxt.Provider>
        </div>
    );
}

export function TabsItem({ children, value, className, activeTabClassName = "bg-gray-100 dark:bg-gray-500/10" }: TabsItemProps) {
    const { active, onTab } = useContext(TabsContenxt);

    const isActive = active === value;

    return (
        <div role="tab" onClick={() => onTab(value)} className={cn("py-2.5 px-4 text-gray-800 dark:text-gray-200 rounded-lg cursor-pointer transition-colors", className, isActive && activeTabClassName)}>
            {children}
        </div>
    );
}

export default Tabs;

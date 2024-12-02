"use client";

import { useRef } from "react";
import { useToggle } from "usehooks-ts";

import Session from "./Session";

import ArrowDown from "@/components/svgs/ArrowDown";
import PlayCircle from "@/components/svgs/PlayCircle";

import { type Topic } from "@/types/topic.types";

type TopicProps = Omit<Topic, "_id"> & { hasAccess: boolean };

function Topic({ title, order, sessions, hasAccess }: TopicProps) {
    const [isOpen, toggleOpen] = useToggle();
    const sessionsRef = useRef<HTMLDivElement | null>(null);
    
    return (
        <div className="flex flex-col gap-y-4">
            <div onClick={toggleOpen} className={`flex items-center justify-between p-6 font-pelak-medium rounded-2xl cursor-pointer transition-all duration-300 ${isOpen ? "bg-blue-500 text-white dark:bg-blue-500" : "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"}`}>
                <div className={`flex items-center gap-x-4 transition-all duration-300 ${isOpen ? "text-white" : "text-gray-800 dark:text-gray-200"}`}>
                    <PlayCircle />
                    <span>بخش {order}</span>
                    <span className="block h-6 w-[1px] bg-gray-200"></span>
                    <span>{title}</span>
                </div>
                <ArrowDown />
            </div>
            <div ref={sessionsRef} className={`space-y-2 overflow-hidden transition-all duration-300 ${isOpen ? "mb-4" : ""}`} style={{ height: isOpen ? `${sessionsRef.current?.scrollHeight}px` : "0" }}>
                {sessions.map((session) => (
                    <Session key={session._id} {...session} isPublic={hasAccess || session.isPublic} />
                ))}
            </div>
        </div>
    );
}

export default Topic;

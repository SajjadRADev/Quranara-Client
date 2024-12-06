"use client";

import { Suspense, useCallback, useState } from "react";

import Navigation from "./Navigation";
import Details from "./Details";
import IntroContent from "./IntroContent";
import Topics, { TopicsLoading } from "./Topics";

import Comments from "./CourseComments";

import { Course } from "@/types/course.types";

type MainProps = Pick<Course, "_id" | "slug" | "time" | "metadata" | "updatedAt"> & { content: string };

function Main({ _id, slug, time, metadata, updatedAt }: MainProps) {
    const [section, setSection] = useState("details");

    const onInView = useCallback((section: string) => setSection(section), []);

    return (
        <main className="space-y-8 w-full xl:w-[70%]">
            <Navigation section={section} />
            <Details time={time} metadata={metadata} updatedAt={updatedAt} onInView={onInView} />
            <IntroContent onInView={onInView} />
            <Suspense fallback={<TopicsLoading />}>
                <Topics _id={_id} onInView={onInView} />
            </Suspense>
            <Comments _id={_id} slug={slug} onInView={onInView} />
        </main>
    );
}

export default Main;
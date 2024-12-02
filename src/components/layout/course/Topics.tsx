"use client";

import { memo, useEffect } from "react";
import { useParams } from "next/navigation";
import { useSuspenseQueries } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

import { checkAccess, getCourseTopics } from "@/api/queries/courses";

import Topic from "@/components/specific/course/Topic";

import Layers from "@/components/svgs/Layers";
import Skeleton, { SkeletonFrame } from "@/components/ui/Skeleton";

type TopicsProps = { _id: string; onInView: (section: string) => void };

function Topics({ _id, onInView }: TopicsProps) {
    const { slug } = useParams<{ slug: string }>();
    const [ref, inView] = useInView({ threshold: .5 });

    useEffect(() => {
        if (inView) onInView("topics");
    }, [inView]);

    const [
        {
            data: { data },
        },
        {
            data: { data: user },
        },
    ] = useSuspenseQueries({
        queries: [
            { queryKey: [`course-topics-${slug}`], queryFn: () => getCourseTopics({ slug }) },
            { queryKey: [`check-course-access-${_id}`], queryFn: () => checkAccess({ courseId: _id }) },
        ],
    });

    return (
        <section ref={ref} className="space-y-8 p-6 bg-white dark:bg-gray-850 rounded-2xl" id="topics">
            <h3 className="flex items-center gap-x-2 font-pelak-medium text-xl">
                <Layers className="w-8" />
                سرفصل‌های دوره
            </h3>
            <div className="space-y-2">
                {data.topics.map((topic) => (
                    <Topic key={topic._id} {...topic} hasAccess={user.hasAccess} />
                ))}
            </div>
        </section>
    );
}

export function TopicsLoading() {
    return (
        <section className="space-y-8 p-6 bg-white dark:bg-gray-850 rounded-2xl" id="content">
            <h3 className="flex items-center gap-x-2 font-pelak-medium text-xl">
                <Layers className="w-8" />
                سرفصل‌های دوره
            </h3>
            <div className="space-y-6">
                <Skeleton>
                    <SkeletonFrame className="h-18 rounded-2xl" />
                </Skeleton>
                <Skeleton>
                    <SkeletonFrame className="h-18 rounded-2xl" />
                </Skeleton>
                <Skeleton>
                    <SkeletonFrame className="h-18 rounded-2xl" />
                </Skeleton>
                <Skeleton>
                    <SkeletonFrame className="h-18 rounded-2xl" />
                </Skeleton>
            </div>
        </section>
    );
}

export default memo(Topics);

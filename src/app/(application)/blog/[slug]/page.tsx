import { Suspense } from "react";
import { notFound } from "next/navigation";

import { getBlog } from "@/api/queries/blog";

import Header from "@/components/layout/blog/Header";
import Details from "@/components/layout/blog/Details";
import Content from "@/components/layout/blog/Content";
import Author from "@/components/layout/blog/Author";
import Actions, { ActionsLoading } from "@/components/layout/blog/Actions";
import Comments from "@/components/layout/shared/Comments";

import Headings from "@/components/specific/blog/Headings";
import RelatedBlogs from "@/components/specific/blog/RelatedBlogs";
import RelatedCourses from "@/components/specific/blog/RelatedCourses";

import Slice from "@/components/ui/Slice";

async function Blog({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const {
        data: { blog },
        status,
    } = await getBlog({ slug });

    if (status === 404) {
        notFound();
    }

    return (
        <div className="my-8">
            <Header title={blog.title} category={blog.category} />
            <div className="container">
                <div className="flex flex-col xl:flex-row gap-8 my-12">
                    <main className="space-y-8 w-full xl:w-[70%]">
                        <section className="space-y-8 p-4 sm:p-8 bg-white dark:bg-gray-850 rounded-2xl">
                            <article className="space-y-12">
                                <Details title={blog.title} description={blog.description} category={blog.category} cover={blog.cover} timeToRead={blog.timeToRead} />
                                <Headings />
                                <Content />
                            </article>
                            <Slice />
                            <div className="flex flex-col xs:flex-row items-center justify-between gap-y-4">
                                <Author />
                                <Suspense fallback={<ActionsLoading />}>
                                    <Actions _id={blog._id} />
                                </Suspense>
                            </div>
                        </section>
                    </main>
                    <aside className="flex flex-col md:flex-row xl:flex-col gap-8 w-full xl:w-[30%]">
                        <RelatedBlogs slug={slug} />
                        <RelatedCourses courses={blog.relatedCourses} />
                    </aside>
                </div>
                <div className="flex gap-8">
                    <div className="w-full xl:w-[70%]">
                        <Comments />
                    </div>
                    <div className="hidden xl:block w-[30%]"></div>
                </div>
            </div>
        </div>
    );
}

export default Blog;

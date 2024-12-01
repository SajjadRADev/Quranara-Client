import { Suspense } from "react";
import { notFound } from "next/navigation";

import { getTv } from "@/api/queries/tv";

import Header from "@/components/layout/tv/Header";
import RelatedTvs from "@/components/layout/tv/RelatedTvs";
import Details from "@/components/layout/tv/Details";

async function Tv({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const {
        data: { tv },
        status,
    } = await getTv({ slug });

    if (status === 404) {
        notFound();
    }

    return (
        <div className="my-8">
            <Header title={tv.title} category={tv.category} />
            <div className="container">
                <div className="flex flex-col xl:flex-row gap-8 my-12">
                    <main className="space-y-8 w-full xl:w-[70%]">
                        <section className="space-y-8 p-4 sm:p-8 bg-white dark:bg-gray-850 rounded-2xl">
                            <Details _id={tv._id} title={tv.title} description={tv.description} category={tv.category} cover={tv.cover} video={tv.video} attached={tv.attached} />
                        </section>
                    </main>
                    <aside className="flex flex-col md:flex-row xl:flex-col gap-8 w-full xl:w-[30%]">
                        <RelatedTvs slug={slug} />
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default Tv;

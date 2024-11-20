import { getAllNews } from "@/api/queries/news";

import NewsSlides from "./NewsSlides";

import Button from "@/components/ui/Button";

import NotificationUnreadLines from "@/components/svgs/NotificationUnreadLines";
import ArrowLeft from "@/components/svgs/ArrowLeft";
import ArrowRight from "@/components/svgs/ArrowRight";

async function News() {
    const { data } = await getAllNews();

    return (
        <section className="space-y-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-y-4 sm:gap-0">
                <div className="flex flex-col items-center sm:items-start gap-4 text-center sm:text-start">
                    <div className="flex items-center gap-x-2 text-gray-700 dark:text-gray-300">
                        <NotificationUnreadLines className="w-8" strokeWidth={1.5} />
                        <h2 className="font-pelak-semibold text-2xl">تازه‌ترین اخبار قرآن‌آرا</h2>
                    </div>
                    <p className="text-gray-500 font-pelak-medium">آخرین اخبار و رویدادهای قرآن‌آرا را دنبال کنید</p>
                </div>
                <div className="flex gap-x-4">
                    <Button size="circle" rounded="lg" variant="neutral-base" className="next-news-btn">
                        <ArrowRight className="w-6" strokeWidth={1.5} />
                    </Button>
                    <Button size="circle" rounded="lg" variant="neutral-base" className="prev-news-btn">
                        <ArrowLeft className="w-6" strokeWidth={1.5} />
                    </Button>
                </div>
            </div>
            <NewsSlides news={data.news} />
        </section>
    );
}

export default News;
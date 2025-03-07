import Link from "next/link";

import Button from "@/components/ui/Button";

import Document from "@/components/svgs/Document";
import LinkCircle from "@/components/svgs/LinkCircle";

function NewsHeader() {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 p-4 sm:p-0">
            <div className="space-y-2">
                <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                    <Document className="w-8" />
                    مدیریت آخرین اخبار
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">تازه‌ترین اخبار قرآن‌آرا رو بدست کاربران علاقه‌مند برسون!</p>
            </div>
            <Link href="/management-panel/news/create">
                <Button size="lg" className="w-full sm:w-max">
                    <LinkCircle />
                    ایجاد خبر جدید
                </Button>
            </Link>
        </div>
    );
}

export default NewsHeader;

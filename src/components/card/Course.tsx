import Link from "next/link";

import { STATUS } from "@/constants/courses";

import Placeholder from "../ui/Placeholder";
import Slice from "../ui/Slice";

import UserRounded from "../svgs/UserRounded";
import Star from "../svgs/Star";
import LongArrowLeft from "../svgs/LongArrowLeft";

import { LimitedCourse } from "@/types/course.types";

const StatusText = {
    [STATUS.ON_PERFORMING]: "پیش فروش",
    [STATUS.PRE_SELL]: "در حال برگزاری",
    [STATUS.REACHED]: "تکمیل شده",
} as const;

function Course({ title, description, slug, status, price, discount, metadata }: LimitedCourse) {
    return (
        <div className="bg-white dark:bg-gray-850 overflow-hidden rounded-2xl">
            <Link href={`/courses/${slug}`} className="overflow-hidden">
                <Placeholder className="aspect-video rounded-xl" type="image" />
            </Link>
            <div className="p-4 flex flex-col gap-2">
                <div className="flex items-center gap-x-1 text-xs font-pelak-medium text-blue-500">
                    <span className="block size-1.5 bg-blue-500 rounded-full"></span>
                    {StatusText[status]}
                </div>
                <h3 className="font-pelak-medium text-lg text-gray-800 dark:text-gray-200 line-clamp-1">
                    <Link href={`/courses/${slug}`}>{title}</Link>
                </h3>
                <p className="line-clamp-3 h-[72px] text-sm text-gray-600 dark:text-gray-400 leading-6">نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
                <div className="flex items-center justify-between mt-2">
                    <div className="flex gap-x-2">
                        <div className="flex items-center gap-x-1 py-1 px-2 font-pelak-medium text-sm bg-blue-50 dark:bg-blue-500/10 text-blue-500 rounded-lg">
                            <UserRounded className="w-4" strokeWidth={1.5} />
                            <span className="h-4.5">{metadata.students}</span>
                        </div>
                        <div className="flex items-center gap-x-1 py-1 px-2 font-pelak-medium text-sm bg-amber-50 dark:bg-amber-400/10 text-amber-400 rounded-lg">
                            <Star className="w-4" strokeWidth={1.5} />
                            <span className="h-4.5">{metadata.rating}</span>
                        </div>
                    </div>
                    <span>
                        <span className="font-pelak-medium text-xl text-gray-800 dark:text-gray-200">{price.toLocaleString("fa")}</span> <span className="text-xs text-gray-500">تومان</span>
                    </span>
                </div>
            </div>
            <Slice className="mx-4 bg-gray-100 dark:bg-gray-800" />
            <div className="p-4">
                <Link href={`/courses/${slug}`} className="flex items-center gap-x-2 w-max m-auto font-pelak-medium text-gray-500 hover:text-amber-400 transition-colors">
                    مشاهده جزئیات دوره
                    <LongArrowLeft className="w-6" strokeWidth={1.5} />
                </Link>
            </div>
        </div>
    );
}

export default Course;

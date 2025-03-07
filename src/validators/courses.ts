import { z } from "zod";
import { SORTING, STATUS } from "@/constants/courses";
import { PaginationQuerySchema } from "./pagination";

export const CreateCourseSchema = z.object({
    title: z.string({ required_error: "لطفاً عنوان دوره را وارد کنید." }).min(1, { message: "عنوان دوره نمی‌تواند خالی باشد." }).max(255, { message: "عنوان دوره نمی‌تواند بیشتر از ۲۵۵ کاراکتر باشد." }),
    slug: z.string().min(1, { message: "شناسه دوره نمی‌تواند خالی باشد." }).max(255, { message: "شناسه دوره نمی‌تواند بیشتر از ۲۵۵ کاراکتر باشد." }),
    description: z.string({ required_error: "لطفاً توضیحات دوره را وارد کنید." }).min(1, { message: "توضیحات دوره نمی‌تواند خالی باشد." }).max(1024, { message: "توضیحات دوره نمی‌تواند بیشتر از ۱۰۲۴ کاراکتر باشد." }),
    cover: z
        .string({ required_error: "لطفاً کاور دوره را وارد کنید." })
        .min(1, { message: "کاور دوره نمی‌تواند خالی باشد." })
        .regex(/^[\w-\/\:\.]+\.(jpg|jpeg|png|webp)$/, {
            message: "فرمت فایل کاور باید jpg، jpeg، png یا webp باشد.",
        })
        .trim(),
    price: z.coerce.number({ required_error: "لطفاً قیمت دوره را وارد کنید." }).min(0, { message: "قیمت دوره نمی‌تواند کمتر از ۰ باشد." }),
    status: z.enum([STATUS.PRE_SELL, STATUS.ON_PERFORMING, STATUS.REACHED], { message: "وضعیت دوره باید یکی از PRE_SELL، ON_PERFORMING یا REACHED باشد." }).default(STATUS.PRE_SELL),
    shown: z.boolean({ required_error: "لطفاً وضعیت نمایش دوره را مشخص کنید." }),
    introduction: z
        .object({
            video: z
                .string()
                .refine((value) => value === "" || /^[\w-\/\:\.]+\.(mp4)$/.test(value), {
                    message: "فرمت فایل ویدئو باید mp4 باشد.",
                })
                .optional(),
            content: z.string().optional(),
        })
        .optional(),
    metadata: z.object(
        {
            support: z.string({ required_error: "لطفاً اطلاعات پشتیبانی را وارد کنید." }).min(1, { message: "اطلاعات پشتیبانی نمی‌تواند خالی باشد." }),
            preRequisite: z.string({ required_error: "لطفاً پیش‌نیاز دوره را وارد کنید." }).min(1, { message: "پیش‌نیاز دوره نمی‌تواند خالی باشد." }),
            present: z.string({ required_error: "لطفاً نام ارائه‌کننده دوره را وارد کنید." }).min(1, { message: "نام ارائه‌کننده دوره نمی‌تواند خالی باشد." }),
            hours: z.coerce.number({ required_error: "لطفاً مدت زمان دوره را وارد کنید." }).positive({ message: "مدت زمان دوره باید عددی مثبت باشد." }),
        },
        { required_error: "لطفاً اطلاعات متادیتا دوره را وارد کنید." }
    ),
});

export type CreateCourseSchemaType = z.infer<typeof CreateCourseSchema> & { slug: string };

export const UpdateCourseSchema = CreateCourseSchema.extend({
    discount: z.coerce.number().max(100, { message: "حداکثر میزان تخفیف ۱۰۰ درصد است" }).optional(),
});

export type UpdateCourseSchemaType = z.infer<typeof UpdateCourseSchema>;

export const UpdateCourseOrderSchema = z
    .object({
        from: z.number({ required_error: "وارد کردن مقدار 'از' الزامی است." }).min(1, { message: "مقدار 'از' نمی‌تواند صفر یا منفی باشد." }),
        to: z.number({ required_error: "وارد کردن مقدار 'به' الزامی است." }).min(1, { message: "مقدار 'به' نمی‌تواند صفر یا منفی باشد." }),
    })
    .refine((values) => values.from !== values.to, {
        path: ["from-to"],
        params: ["from", "to"],
        message: "مقادیر 'از' و 'به' نمی‌توانند یکسان باشند.",
    });

export type UpdateCourseOrderSchemaType = z.infer<typeof UpdateCourseOrderSchema>;

export const GetAllCoursesQuerySchema = PaginationQuerySchema.extend({
    sort: z
        .enum([SORTING.DEFAULT, SORTING.NEWSET, SORTING.OLDEST, SORTING.POPULAR], {
            message: "لطفاً یک مقدار مرتب‌سازی معتبر انتخاب کنید.",
        })
        .default(SORTING.DEFAULT),
    search: z.string().min(1, { message: "عبارت جستجو نمی‌تواند خالی باشد." }).optional(),
});

export type GetAllCoursesQuerySchemaType = z.infer<typeof GetAllCoursesQuerySchema>;

export const SearchCoursesQuerySchame = PaginationQuerySchema.extend({
    q: z.string({ required_error: "وارد کردن مقدار 'q' الزامی است." }).min(1, { message: "'q' نمی‌تواند خالی باشد." }),
});

export type SearchCoursesQuerySchameType = z.infer<typeof SearchCoursesQuerySchame>;

export const DiscountAllSchema = z.object({
    discount: z.coerce.number().min(1, { message: "حداقل میزان تخفیف ۱ درصد است" }).max(100, { message: "حداکثر میزان تخفیف ۱۰۰ درصد است" }),
});

export type DiscountAllSchemaType = z.infer<typeof DiscountAllSchema>;

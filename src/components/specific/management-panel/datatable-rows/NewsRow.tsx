"use client";

import Link from "next/link";

import { formatDate } from "@/libs/funcs";

import Image from "@/components/ui/Image";
import BadgeLight from "@/components/ui/BadgeLight";
import IconButton from "@/components/ui/IconButton";
import LimitedString from "@/components/ui/LimitedString";

import Eye from "@/components/svgs/Eye";
import PenSquare from "@/components/svgs/PenSquare";
import SquareTopUp from "@/components/svgs/SquareTopUp";
import SquareBottomTop from "@/components/svgs/SquareBottomTop";
import Trash from "@/components/svgs/Trash";

import { News } from "@/types/news.types";

type NewsRowProps = { news: News; onPreview: (news: News) => void; onRemove: (payload: Pick<News, "_id" | "title">) => void; onShown: (_id: string) => void; onUnshown: (_is: string) => void };

function NewsRow({ news, onPreview, onRemove, onShown, onUnshown }: NewsRowProps) {
    return (
        <tr>
            <td>
                <div className="h-28 aspect-video">
                    <Image src={news.cover} alt={news.title} width={320} height={180} wrapperClassName="rounded-xl" />
                </div>
            </td>
            <td>
                <LimitedString text={news.title} limit={25} />
            </td>
            <td>{news.shown ? <BadgeLight varient="teal">در حال نمایش</BadgeLight> : <BadgeLight varient="gray">عدم نمایش</BadgeLight>}</td>
            <td>{formatDate(new Date(news.createdAt ?? Date.now()))}</td>
            <td>
                <div className="flex gap-x-2">
                    <IconButton label="پیش نمایش" variant="teal" onClick={() => onPreview(news)}>
                        <Eye />
                    </IconButton>
                    <Link href={`news/${news._id}/update`}>
                        <IconButton label="ویرایش">
                            <PenSquare />
                        </IconButton>
                    </Link>
                    {news.shown ? (
                        <IconButton label="عدم نمایش" onClick={() => onUnshown(news._id)}>
                            <SquareTopUp />
                        </IconButton>
                    ) : (
                        <IconButton label="نمایش" onClick={() => onShown(news._id)}>
                            <SquareBottomTop />
                        </IconButton>
                    )}
                    <IconButton label="حذف دائمی" variant="danger" onClick={() => onRemove({ _id: news._id, title: news.title })}>
                        <Trash />
                    </IconButton>
                </div>
            </td>
        </tr>
    );
}

export default NewsRow;

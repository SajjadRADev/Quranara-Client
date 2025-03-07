"use client";

import Link from "next/link";

import { formatDate } from "@/libs/funcs";

import BadgeLight from "@/components/ui/BadgeLight";
import IconButton from "@/components/ui/IconButton";
import LimitedString from "@/components/ui/LimitedString";

import Eye from "@/components/svgs/Eye";
import PenSquare from "@/components/svgs/PenSquare";
import SquareTopUp from "@/components/svgs/SquareTopUp";
import SquareBottomTop from "@/components/svgs/SquareBottomTop";

import { LimitedTv, TvIdentifiers } from "@/types/tv.types";

type TvRowProps = { tv: LimitedTv; onShown: (tv: TvIdentifiers) => void; onUnshown: (tv: TvIdentifiers) => void };

function TvRow({ tv, onShown, onUnshown }: TvRowProps) {
    return (
        <tr>
            <td>
                <LimitedString text={tv.title} limit={25} />
            </td>
            <td>
                <span className="underline text-amber-400">{tv.category.title}</span>
            </td>
            <td>{tv.shown ? <BadgeLight varient="teal">در حال نمایش</BadgeLight> : <BadgeLight varient="gray">عدم نمایش</BadgeLight>}</td>
            <td>
                <span className="underline">{tv.likes} پسندیدن</span>
            </td>
            <td>{formatDate(new Date(tv.updatedAt ?? Date.now()))}</td>
            <td>
                <div className="flex gap-x-2">
                    <Link href={`/tv/${tv.slug}`} target="_blank">
                        <IconButton label="مشاهده جزئیات" variant="teal">
                            <Eye />
                        </IconButton>
                    </Link>
                    <Link href={`tvs/${tv._id}/update`}>
                        <IconButton label="ویرایش">
                            <PenSquare />
                        </IconButton>
                    </Link>
                    {tv.shown ? (
                        <IconButton label="عدم نمایش" onClick={() => onUnshown({ _id: tv._id, slug: tv.slug })}>
                            <SquareTopUp />
                        </IconButton>
                    ) : (
                        <IconButton label="نمایش" onClick={() => onShown({ _id: tv._id, slug: tv.slug })}>
                            <SquareBottomTop />
                        </IconButton>
                    )}
                </div>
            </td>
        </tr>
    );
}

export default TvRow;

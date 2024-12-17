"use client";

import { formatDate } from "@/libs/funcs";

import Avatar from "@/components/ui/Avatar";
import IconButton from "@/components/ui/IconButton";

import Layers from "@/components/svgs/Layers";
import NotificationUnreadLines from "@/components/svgs/NotificationUnreadLines";
import UserBlockRounded from "@/components/svgs/UserBlockRounded";
import UserRounded from "@/components/svgs/UserRounded";

import { User } from "@/types/user.types";

type UserRowProps = { user: User; onDetails: (user: User) => void; onSignCourse: (data: { user: Pick<User, "_id" | "username"> }) => void; onSendNotification: (_id: string) => void };

function UserRow({ user, onDetails, onSignCourse, onSendNotification }: UserRowProps) {
    return (
        <tr>
            <td>
                <div className="flex gap-x-2">
                    <div className="relative">
                        <Avatar src={user.profile ?? undefined} className="size-14 rounded-full" />
                        <div className="absolute left-1 bottom-1 size-2 bg-teal-500 rounded-full">
                            <div className="size-full bg-teal-500 rounded-full animate-ping"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <span className="font-pelak-medium text-gray-800 dark:text-gray-200">{user.username}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{user.phone}</span>
                    </div>
                </div>
            </td>
            <td>{user.phone}</td>
            <td>{user.fullname}</td>
            <td>{formatDate(new Date(user.createdAt ?? Date.now()))}</td>
            <td>
                <div className="flex gap-x-2">
                    <IconButton label="جزئیات حساب" onClick={() => onDetails(user)}>
                        <UserRounded />
                    </IconButton>
                    <IconButton label="اهدای دوره" onClick={() => onSignCourse({ user: { _id: user._id, username: user.username } })}>
                        <Layers />
                    </IconButton>
                    <IconButton label="ارسال اعلان" onClick={() => onSendNotification(user._id)}>
                        <NotificationUnreadLines />
                    </IconButton>
                    <IconButton label="مسدود کردن" variant="danger">
                        <UserBlockRounded />
                    </IconButton>
                </div>
            </td>
        </tr>
    );
}

export default UserRow;

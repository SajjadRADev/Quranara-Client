import { STATUS, TYPE } from "@/constants/tickets";

import { Course } from "./course.types";
import { PopulatedUser } from "./user.types";
import { AttachedType } from "./attached.types";

type Status = (typeof STATUS)[keyof typeof STATUS];
type TicketType = (typeof TYPE)[keyof typeof TYPE];

type TicketCourse = Pick<Course, "_id" | "title">;

type TicketMessage = {
    content: string;
    user: PopulatedUser;
    attached?: {
        type: AttachedType;
        url: string;
    };
    createdAt: Date
};

export type Ticket = {
    _id: string;
    title: string;
    description: string;
    user: PopulatedUser;
    course?: TicketCourse;
    status: Status;
    type: TicketType;
    shortId: string;
    messages: TicketMessage[];
    createdAt: Date
};

export type LimitedTicket = Omit<Ticket, "messages">
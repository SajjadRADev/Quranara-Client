import Quranara from "../clients/Quranara";

import { NAVBAR_MENUS } from "@/constants/requestTags";

import { Response } from "@/types/response.types";
import { Menus } from "@/types/ui.types";

export function getMenus(): Promise<Response<Menus>> {
    return Quranara.get("/ui/menus", {
        cache: "force-cache",
        next: {
            tags: NAVBAR_MENUS,
        },
    });
}
import { getAllBlogs } from "@/api/queries/blog";

import { ENTITIES } from "@/constants/entities";

import { getDatatableItemsPerPage } from "@/libs/server/cookies";

import BlogsHeader from "@/components/layout/management-panel/blogs/BlogsHeader";

async function Blogs({ searchParams }: { searchParams: Promise<{ page: string }> }) {
    const { page = 1 } = await searchParams;
    const limit = await getDatatableItemsPerPage(ENTITIES.BLOGS);

    const { data } = await getAllBlogs({ page: +page, limit, sort: "newest" });

    return (
        <div className="space-y-4">
            <BlogsHeader />
        </div>
    );
}

export default Blogs;
import { notFound } from "next/navigation";

import { getCourse } from "@/api/queries/courses";

import Header from "@/components/layout/course/Header";

async function page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const {
        data: { course },
        status,
    } = await getCourse({ slug });

    if (status === 404) {
        notFound();
    }

    return (
        <div className="my-8">
            <Header _id={course._id} title={course.title} description={course.description} price={course.price} status={course.status} cover={course.cover} video={course.introduction.video} />
            <div className="container"></div>
        </div>
    );
}

export default page;

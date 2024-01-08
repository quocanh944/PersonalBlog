import { getSinglePost } from "@/lib/notion";
import { notFound } from "next/navigation";
import MyNotionRenderer from "@/components/MyNotionRenderer";
import { Suspense } from "react";
import Image from "next/image";
import Loading from "./loading";

export default async function DetailBlog({ params }: { params: { slug: string } }) {

    const blogDetail = await getSinglePost(params.slug)

    if (blogDetail === null) {
        notFound()
    }

    return (
        <main>
            <div className="mb-5">
                <h1 className="font-bold">
                    {blogDetail.title}
                </h1>
                <p>Date: {blogDetail.date}</p>
                <Image className="rounded-lg max-h-[300px] w-full" src={blogDetail.cover} alt={blogDetail.title + "Cover Image"} width={320} height={200} />
            </div>

            <Suspense fallback={<Loading />}>
                <MyNotionRenderer id={blogDetail.id} />
            </Suspense>
        </main>
    )
}
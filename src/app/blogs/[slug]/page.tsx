import { getSinglePost } from "@/lib/notion";
import { notFound } from "next/navigation";
import MyNotionRenderer from "@/components/MyNotionRenderer";
import { Suspense } from "react";
import Image from "next/image";
import Loading from "./loading";
import { redis } from "@/lib/redis";
import { ReportView } from "./view";

export const revalidate = 60

export default async function DetailBlog({ params }: { params: { slug: string } }) {
    const views = await redis.get<number>(["pageviews", "projects", params.slug].join(":")) ?? 0

    const blogDetail = await getSinglePost(params.slug)

    if (blogDetail === null) {
        notFound()
    }

    console.log("Slug: ", params.slug, "\nViews: ", views);
    
    return (
        <main>
            <div className="mb-5">
                <h1 className="font-bold">
                    {blogDetail.title}
                </h1>
                <p>Date: {blogDetail.date}</p>
                <ReportView slug={params.slug}/>
                <Image className="rounded-lg max-h-[300px] w-full" src={blogDetail.cover} alt={blogDetail.title + "Cover Image"} width={320} height={200} />
            </div>

            <Suspense fallback={<Loading />}>
                <MyNotionRenderer id={blogDetail.id} />
            </Suspense>
        </main>
    )
}
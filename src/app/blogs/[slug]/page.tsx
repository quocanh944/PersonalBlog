import { Suspense } from "react";
import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from "next/navigation";
import Image from "next/image";
import MyNotionRenderer from "@/components/MyNotionRenderer";
import { redis } from "@/lib/redis";
import { getSinglePost } from "@/lib/notion";
import Loading from "./loading";
import { ReportView } from "./view";

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}
// export const revalidate = 60

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const blogDetail = await getSinglePost(params.slug)
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: blogDetail?.title,
        openGraph: {
            images: [blogDetail?.cover ?? "", ...previousImages],
        },
    }
}


export default async function DetailBlog({ params }: Props) {
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
                <ReportView slug={params.slug} />
                <Image className="rounded-lg max-h-[300px] w-full" src={blogDetail.cover} alt={blogDetail.title + "Cover Image"} width={320} height={200} />
            </div>

            <Suspense fallback={<Loading />}>
                <MyNotionRenderer id={blogDetail.id} />
            </Suspense>
        </main>
    )
}
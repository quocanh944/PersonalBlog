import Link from "next/link"
import Image from "next/image"
import { redis } from "@/app/api/incr/route";
import { blogPreview } from "@/lib/notion";

export default async function BlogCard({ blog }: { blog: blogPreview }) {
    const views = await redis.get<number>(["pageviews", "projects", blog.slug].join(":")) ?? 0

    return (
        <div className="mx-auto max-w-[320px] bg-white shadow-md border border-gray-200 rounded-lg mb-5" key={blog.id}>
            <Link passHref href={"/blogs/" + blog.slug}>
                <Image className="rounded-t-lg h-[200px]" src={blog.cover} alt={blog.title + "Cover Image"} width={320} height={200} />
            </Link>
            <div className="p-5">
                <Link passHref href={"/blogs/" + blog.slug}>
                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{blog.title}</h5>
                </Link>
                <p className="font-normal text-gray-700 mb-3 h-[75px]">{blog.description}</p>
                <div className="flex items-center justify-between">
                    <Link passHref className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href={"/blogs/" + blog.slug}>
                        Read more
                    </Link>
                    <span className="float-right text-gray-600">{views} views</span>
                </div>

            </div>
        </div>
    )
}
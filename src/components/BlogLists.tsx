import Link from "next/link"
import Image from "next/image"
import { getAllPublishedPages } from "@/lib/notion"
import { redis } from "@/lib/redis";
import BlogCard from "./BlogCard";

export default async function BlogList() {
    const blogPreviews = await getAllPublishedPages();

    return (
        <div className="grid auto-rows-fr grid-cols-2 sm:grid-cols-2 gap-[15px]">
            {blogPreviews.map((blog) => {
                return <BlogCard blog={blog} key={blog.id} />
            })}
        </div>
    )
}
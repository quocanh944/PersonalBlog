import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { generatePageMetadata } from "@/lib/notion";

import { Client } from "@notionhq/client";
import type { Metadata } from 'next'
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Han Nguyen's Blog",
  description: 'Han Nguyen - Software Engineer, based on Ho Chi Minh City, Vietnam.',
  icons: '/avatar.png'
}

export default async function Blogs() {
  const notion = new Client({
    auth: process.env.NOTION_SECRET
  })

  const query = await notion.databases.query({
    database_id: process.env.DATABASE_ID ? process.env.DATABASE_ID : "",
    filter: {
      property: "published",
      checkbox: {
        equals: true
      }
    }
  })
  // @ts-ignore
  const blogPreviews: blogPreview[] = query.results.map((blog: any) => {

    return generatePageMetadata(blog);
  })

  return (
    <>
      <NavBar />
      <main>
        <div className="text-center">
          <h1>
            Han Nguyen{"'"}s Blogs
          </h1>
          <br />
          <p>A blog about technical, coding and life.</p>
        </div>
        <div className="grid auto-rows-fr grid-cols-2 sm:grid-cols-2 gap-[15px]">
          {blogPreviews.map((blog) => {
            return (
              <div className="mx-auto max-w-[320px] bg-white shadow-md border border-gray-200 rounded-lg mb-5" key={blog.id}>
                <Link passHref href={"/blogs/" + blog.slug}>
                  <Image className="rounded-t-lg max-h-[200px]" src={blog.cover} alt={blog.title + "Cover Image"} width={320} height={200} />
                </Link>
                <div className="p-5">
                  <Link passHref href={"/blogs/" + blog.slug}>
                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{blog.title}</h5>
                  </Link>
                  <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <Link passHref className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href={"/blogs/" + blog.slug}>
                    Read more
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </main>
      <Footer />
    </>
  )
}

import BlogList from "@/components/BlogLists";

import type { Metadata } from 'next'
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Han Nguyen's Blog",
  description: 'Han Nguyen - Software Engineer, based on Ho Chi Minh City, Vietnam.',
  icons: '/avatar.png'
}

export default async function Blogs() {

  return (
    <main>
      <div className="text-center mb-4">
        <h1>
          Han Nguyen{"'"}s Blogs
        </h1>
        <br />
        <p>A blog about technical, coding and life.</p>
      </div>
      <Suspense fallback={<Loading />}>
        <BlogList />
      </Suspense>
    </main>
  )
}

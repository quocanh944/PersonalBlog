import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { getSinglePost, getPageBlocks } from "@/lib/notion";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import { notFound } from "next/navigation";
import { notion } from "@/lib/notion";

export default async function DetailBlog({ params }: { params: { slug: string } }) {

    const blogDetail = await getSinglePost(params.slug)

    if (blogDetail === null) {
        notFound()
    }

    const renderer = new NotionRenderer({
        client: notion,
    });

    renderer.use(hljsPlugin({}));
    renderer.use(bookmarkPlugin(undefined));

    const blocks = await getPageBlocks(blogDetail.id);
    const html = await renderer.render(...blocks);

    return (
        <>
            <NavBar />
            <main>
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
            </main>
            <Footer />
        </>
    )
}
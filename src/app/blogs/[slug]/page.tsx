import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { getSinglePost, getPageBlocks } from "@/lib/notion";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import { notFound } from "next/navigation";
import { notion } from "@/lib/notion";
import { createBlockRenderer } from "@notion-render/client";
import type { CalloutBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export default async function DetailBlog({ params }: { params: { slug: string } }) {

    const blogDetail = await getSinglePost(params.slug)

    if (blogDetail === null) {
        notFound()
    }

    const calloutBlockRender = createBlockRenderer<CalloutBlockObjectResponse>(
        'callout', async (data, render) => {
            let emoji = '';
            if (data.callout.icon?.type === 'emoji') {
                emoji = data.callout.icon.emoji;
            }

            return `
            <div class="px-4 py-3 border border-neutral-200 bg-neutral-50 rounded text-sm flex items-center my-3 bg-slate-200">
                <div class="flex items-center w-4 mr-4">${emoji}</div>
                <div class="w-full callout">${await render.render(...data.callout.rich_text)}</div>
            </div>`;
        }
    );

    const renderer = new NotionRenderer({
        client: notion,
        renderers: [calloutBlockRender]
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
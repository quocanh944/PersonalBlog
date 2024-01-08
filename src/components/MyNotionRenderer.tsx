import { NotionRenderer } from "@notion-render/client";
import { notion, getPageBlocks } from "@/lib/notion";
import { createBlockRenderer } from "@notion-render/client";
import type { CalloutBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export default async function MyNotionRenderer({ id }: { id: string }) {
    const blocks = await getPageBlocks(id);

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

    const html = await renderer.render(...blocks);

    return <div dangerouslySetInnerHTML={{ __html: html }}></div>
}
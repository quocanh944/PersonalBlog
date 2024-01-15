import { NotionRenderer } from "@notion-render/client";
import React from 'react';
import { notion, getPageBlocks } from "@/lib/notion";
import { createBlockRenderer } from "@notion-render/client";
import type { CalloutBlockObjectResponse, CodeBlockObjectResponse, EquationBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import java from 'highlight.js/lib/languages/java';
import python from 'highlight.js/lib/languages/python';
import katex from 'katex'
import 'katex/dist/katex.min.css';

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('python', python)
hljs.registerLanguage('java', java)

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

    const equationsBlockRender = createBlockRenderer<EquationBlockObjectResponse>("equation",async (data, render) => {
        const html = katex.renderToString(data.equation.expression);

        return `<div class='text-center'>${html}</div>`
    })

    const codeBlockRender = createBlockRenderer<CodeBlockObjectResponse>("code", async (data, render) => {
        console.log(data);
        let code = await render.render(...data.code.rich_text);
        return `<div class="notion-code my-2"><pre><code class="language-${data.code.language}">${hljs.highlight(code, { language: data.code.language }).value}</code></pre></div>`
    })

    const renderer = new NotionRenderer({
        client: notion,
        renderers: [calloutBlockRender, codeBlockRender, equationsBlockRender]
    });

    const html = await renderer.render(...blocks);

    return <div className="notion-render" dangerouslySetInnerHTML={{ __html: html }}></div>
}

import { Client } from "@notionhq/client";
import {
    BlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({
    auth: process.env.NOTION_SECRET,
})

export type blogPreview = {
    id: string,
    title: string,
    cover: string,
    slug: string,
    date: string,
    description: string
}

export function generatePageMetadata(blog: any) {
    let cover: string = ''

    if (blog.cover.type === 'file') {
        cover = blog.cover.file.url
    } else if (blog.cover.type === 'external') {
        cover = blog.cover.external.url
    }

    return {
        id: blog.id,
        title: blog.properties.title.title[0].plain_text,
        cover: cover,
        slug: blog.properties.slug.rich_text[0].plain_text,
        date: blog.properties.date.date.start,
        description: blog.properties.description.rich_text[0].plain_text
    }
}

export const getSinglePost = async (slug: string) => {
    const response = await notion.databases.query({
        database_id: process.env.DATABASE_ID ? process.env.DATABASE_ID : "",
        filter: {
            property: "slug",
            formula: {
                string: {
                    equals: slug
                }
            }
        },
    });

    if (response.results.length <= 0) {
        return null;
    }

    const blogPreviews: blogPreview[] = response.results.map((blog: any) => {
        return generatePageMetadata(blog)
    })

    return blogPreviews[0];
}

export const getPageBlocks = async (pageId: string) => {
    const res = await notion.blocks.children
        .list({ block_id: pageId });
    return res.results as BlockObjectResponse[];
};

export const getAllPublishedPages = async (): Promise<blogPreview[]> => {

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

    return blogPreviews
}

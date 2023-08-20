import { createClient } from "microcms-js-sdk";

if (!process.env.API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN ?? "",
  apiKey: process.env.API_KEY,
});

// 記事の詳細を取得する
export const getPostBySlug = async (slug: string) => {
  try {
    const post = await client.get({
      endpoint: "blogs",
      queries: { filters: `slug[equals]${slug}` },
    });
    return post.contents[0];
  } catch (err) {
    console.log("ERROR:getPostBySlug");
    console.log(err);
  }
};

// 記事一覧を取得する
export const getAllPosts = async (limit = 100) => {
  try {
    const slugs = await client.get({
      endpoint: "blogs",
      queries: { fields: "title,slug,eyecatch", orders: "-publishDate", limit },
    });
    return slugs.contents;
  } catch (err) {
    console.log("ERROR:getAllPosts");
    console.log(err);
  }
};

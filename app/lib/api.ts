import { createClient } from "microcms-js-sdk";

if (!process.env.API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN ?? "",
  apiKey: process.env.API_KEY,
});

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

export const getAllSlugs = async (limit = 100) => {
  try {
    const slugs = await client.get({
      endpoint: "blogs",
      queries: { fields: "title,slug", orders: "-publishDate", limit },
    });
    return slugs.contents;
  } catch (err) {
    console.log("ERROR:getAllSlugs");
    console.log(err);
  }
};

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

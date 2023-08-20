import { createClient } from "microcms-js-sdk";
import { Categories, PostDetail, TitleList } from "./types";

if (!process.env.API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN ?? "",
  apiKey: process.env.API_KEY,
});

// 記事の詳細を取得する
export const getPostBySlug = async (
  slug: string
): Promise<PostDetail | undefined> => {
  try {
    const post = await client.get({
      endpoint: "blogs",
      queries: { filters: `slug[equals]${slug}` },
    });
    return post.contents[0];
  } catch (err) {
    console.log("ERROR:getPostBySlug");
    console.log(err);
    return undefined;
  }
};

// 記事一覧を取得する
export const getAllPosts = async (
  limit = 100
): Promise<TitleList[] | undefined> => {
  try {
    const slugs = await client.get({
      endpoint: "blogs",
      queries: { fields: "title,slug,eyecatch", orders: "-publishDate", limit },
    });
    return slugs.contents;
  } catch (err) {
    console.log("ERROR:getAllPosts");
    console.log(err);
    return undefined;
  }
};

// カテゴリーの記事一覧を取得する
export const getAllPostsByCategory = async (
  id: string,
  limit = 100
): Promise<TitleList[] | undefined> => {
  try {
    const slugs = await client.get({
      endpoint: "blogs",
      queries: {
        fields: "title,slug,eyecatch",
        orders: "-publishDate",
        limit,
        filters: `categories[contains]${id}`,
      },
    });
    return slugs.contents;
  } catch (err) {
    console.log("ERROR:getAllPostsByCategory");
    console.log(err);
    return undefined;
  }
};

// カテゴリー一覧を取得する
export const getCategories = async (
  limit = 100
): Promise<Categories[] | undefined> => {
  try {
    const categories = await client.get({
      endpoint: "categories",
      queries: { fields: "name,id,slug", limit: limit },
    });
    return categories.contents;
  } catch (err) {
    console.log("ERROR:getCategories");
    console.log(err);
    return undefined;
  }
};

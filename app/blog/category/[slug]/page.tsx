import React from "react";
import PostHeader from "../../[slug]/PostHeader";
import Container from "@/app/components/Container";
import { getAllPostsByCategory, getCategories } from "@/app/lib/api";
import { Categories, TitleList } from "@/app/lib/types";
import Post from "../../Post";
import Pagenation from "../../[slug]/Pagenation";

// urlのidはpropsのparamsに含まれる
type Props = { params: { slug: string } };

const Category = async ({ params: { slug } }: Props) => {
  const categories: Categories[] | undefined = await getCategories();
  if (!categories) return;
  const categoryName =
    categories.find((category) => category.slug === slug)?.name ?? "";

  const postsByCategories: TitleList[] | undefined =
    await getAllPostsByCategory(slug);
  if (!postsByCategories) return;
  console.log(postsByCategories);

  const [prevPost, nextPost] = prevNextPost(categories, slug);

  return (
    <Container>
      <PostHeader title={categoryName} subtitle={"Blog Category"} />
      <Post posts={postsByCategories} />
      <Pagenation
        prevText={prevPost.name}
        prevUrl={`/blog/category/${prevPost.slug}`}
        nextText={nextPost.name}
        nextUrl={`/blog/category/${nextPost.slug}`}
      />
    </Container>
  );
};

// 記事一覧と現在の記事情報から、前後の記事のタイトルとurlを取得する関数
const prevNextPost = (allCategories: Categories[], currentCategory: string) => {
  const numberOfCategoriess = allCategories.length;

  // 取得したslug配列の中から、現在のslugと一致するものの配列のindexを返却する
  const index = allCategories.findIndex(({ slug }) => slug === currentCategory);
  console.log("index", index);

  const prevPost =
    index + 1 === numberOfCategoriess
      ? { name: "", slug: "" }
      : allCategories[index + 1];

  const nextPost =
    index === 0 ? { name: "", slug: "" } : allCategories[index - 1];

  return [prevPost, nextPost];
};

export default Category;

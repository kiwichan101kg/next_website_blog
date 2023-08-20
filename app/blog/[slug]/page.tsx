import Container from "@/app/components/Container";
import { getAllPosts, getPostBySlug } from "@/app/lib/api";
import React from "react";
import PostHeader, { PostHeaderProps } from "./PostHeader";
import Image from "next/image";
import PostBody from "@/app/components/PostBody";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "@/app/components/TwoColumn";
import ConvertBody from "./ConvertBody";
import PostCategories from "./PostCategories";
import { eyecatchLocal } from "@/app/lib/constants";
import Pagenation from "./Pagenation";
import { PostDetail, TitleList } from "@/app/lib/types";

// urlのidはpropsのparamsに含まれる
type Props = { params: { slug: string } };

const page = async ({ params: { slug } }: Props) => {
  const post: PostDetail | undefined = await getPostBySlug(slug);
  if (!post) return;
  const { title, publishDate, eyecatch: _eyecatch, content, categories } = post;
  const eyecatch = _eyecatch ?? eyecatchLocal;

  // 記事一覧を取得し、前後の記事のタイトルをurlを取得する
  const allSlugs: TitleList[] | undefined = await getAllPosts();
  if (!allSlugs) return;
  const [prevPost, nextPost] = prevNextPost(allSlugs, slug);

  const postHeaderProps: PostHeaderProps = {
    title,
    subtitle: "Blog Article",
    publish: publishDate ?? "",
  };

  return (
    <Container>
      <article>
        <PostHeader {...postHeaderProps} />
        <figure>
          <Image
            src={eyecatch.url}
            alt={""}
            layout="responsive"
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width:1152px)1152px 100vw"
          ></Image>
        </figure>
        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>
        <Pagenation
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        />
      </article>
    </Container>
  );
};

// 記事一覧と現在の記事情報から、前後の記事のタイトルとurlを取得する関数
const prevNextPost = (
  allSlugs: TitleList[],
  currentSlug: TitleList["slug"]
) => {
  const numberOfPosts = allSlugs.length;

  // 取得したslug配列の中から、現在のslugと一致するものの配列のindexを返却する
  const index = allSlugs.findIndex(({ slug }) => slug === currentSlug);
  console.log("index", index);

  const prevPost =
    index + 1 === numberOfPosts ? { title: "", slug: "" } : allSlugs[index + 1];

  const nextPost = index === 0 ? { title: "", slug: "" } : allSlugs[index - 1];

  return [prevPost, nextPost];
};

export default page;

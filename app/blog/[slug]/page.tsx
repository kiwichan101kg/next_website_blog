import Container from "@/app/components/Container";
import { getAllSlugs, getPostBySlug } from "@/app/lib/api";
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

// urlのidはpropsのparamsに含まれる
type Props = { params: { slug: string } };

type SlugType = {
  title: string;
  slug: string;
};

const page = async ({ params: { slug } }: Props) => {
  const post = await getPostBySlug(slug);
  const { title, publishDate, eyecatch: _eyecatch, content, categories } = post;
  const eyecatch = _eyecatch ?? eyecatchLocal;

  const allSlugs = await getAllSlugs();
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

export const prevNextPost = (
  allSlugs: SlugType[],
  currentSlug: SlugType["slug"]
) => {
  const numberOfPosts = allSlugs.length;
  // console.log("slugの数", numberOfPosts);
  console.log(allSlugs);

  // 取得したslug配列の中から、現在のslugと一致するものの配列のindexを返却する
  const index = allSlugs.findIndex(({ slug }) => slug === currentSlug);
  console.log("index", index);

  const prevPost =
    index + 1 === numberOfPosts ? { title: "", slug: "" } : allSlugs[index + 1];

  const nextPost = index === 0 ? { title: "", slug: "" } : allSlugs[index - 1];

  return [prevPost, nextPost];
};

export default page;

import Container from "@/app/components/Container";
import { getPostBySlug } from "@/app/lib/api";
import React from "react";
import PostHeader, { PostHeaderProps } from "./PostHeader";
import Image from "next/image";
import PostBody from "@/app/components/PostBody";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "@/app/components/TwoColumn";
import ConvertBody from "./COnvertBody";
import PostCategories from "./PostCategories";
import { eyecatchLocal } from "@/app/lib/constants";

// urlのidはpropsのparamsに含まれる
type Props = { params: { slug: string } };

const page = async ({ params: { slug } }: Props) => {
  const post = await getPostBySlug(slug);
  const { title, publishDate, eyecatch: _eyecatch, content, categories } = post;
  const eyecatch = _eyecatch ?? eyecatchLocal;
  console.log("ブログ", post);

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
      </article>
    </Container>
  );
};

export default page;

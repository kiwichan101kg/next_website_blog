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

// urlのidはpropsのparamsに含まれる
type Props = { params: { slug: string } };

const page = async ({ params: { slug } }: Props) => {
  const post = await getPostBySlug(slug);
  const { title, publishDate, eyecatch, content } = post;
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
          <TwoColumnSidebar>カテゴリ</TwoColumnSidebar>
        </TwoColumn>
      </article>
    </Container>
  );
};

export default page;

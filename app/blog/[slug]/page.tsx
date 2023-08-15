import Container from "@/app/components/Container";
import { getPostBySlug } from "@/app/lib/api";
import React from "react";
import PostHeader, { PostHeaderProps } from "./PostHeader";

// urlのidはpropsのparamsに含まれる
type Props = { params: { slug: string } };

const page = async ({ params: { slug } }: Props) => {
  const content = await getPostBySlug(slug);
  const { title, publishDate } = content;
  console.log("ブログ", content);

  const postHeaderProps: PostHeaderProps = {
    title,
    subtitle: "Blog Article",
    publish: publishDate ?? "",
  };

  return (
    <Container>
      <article>
        <PostHeader {...postHeaderProps} />
      </article>
    </Container>
  );
};

export default page;

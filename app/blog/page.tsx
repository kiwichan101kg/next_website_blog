import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import { getAllPosts, getAllSlugs, getPostBySlug } from "../lib/api";
import Post, { PostType } from "./Post";
import { eyecatchLocal } from "../lib/constants";

const Blog = async () => {
  const allPosts: PostType[] = await getAllPosts();
  console.log("blog", allPosts);

  // 取得した記事オブジェクトにeyecatchのプロパティがなかった場合ローカルeyecatchを設定する
  for (const post of allPosts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
  }
  return (
    <>
      <Container>
        <Hero title={"Blog"} subTitle={"Recent Posts"} />
        <Post posts={allPosts} />
      </Container>
    </>
  );
};

export default Blog;

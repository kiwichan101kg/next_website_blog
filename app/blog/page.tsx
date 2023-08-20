import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import { getAllPosts } from "../lib/api";
import Post, { PostType } from "./Post";
import { eyecatchLocal } from "../lib/constants";

const Blog = async () => {
  const allPosts: PostType[] = await getAllPosts();

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

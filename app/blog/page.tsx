import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import { getPostBySlug } from "../lib/api";

const Blog = async () => {
  const contents = await getPostBySlug("schedule");
  console.log("blog", contents);
  return (
    <>
      <Container>
        <Hero title={"Blog"} subTitle={"Recent Posts"} />
      </Container>
    </>
  );
};

export default Blog;

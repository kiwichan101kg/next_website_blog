import styles from "./page.module.css";
import Hero from "./components/Hero";
import Container from "./components/Container";
import Post, { PostType } from "./blog/Post";
import { getAllPosts } from "./lib/api";
import Pagenation from "./blog/[slug]/Pagenation";

export default async function Home() {
  const postsForHome: PostType[] = await getAllPosts(4);
  console.log("Home", postsForHome);
  return (
    <>
      <Container>
        <Hero title={"CUBE"} subTitle={"アウトプットしていくサイト"} imageOn />
        <Post posts={postsForHome} />
        <Pagenation nextText="More Posts" nextUrl={`/blog`} />
      </Container>
    </>
  );
}

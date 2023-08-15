import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles/post.module.css";

export type PostType = {
  title: string;
  slug: string;
  eyecatch: { url: string; height: number; width: number };
};

const Post = ({ posts }: { posts: PostType[] }) => {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch }) => (
        <article>
          <Link href={`/blog/${slug}`}>
            <figure>
              <Image
                layout="responsive"
                // objectFit="cover"
                sizes="(min-width:1152px)567px,50vw"
                src={eyecatch.url}
                alt={""}
                width={eyecatch.width}
                height={eyecatch.height}
              />
            </figure>
            <h2>{title}</h2>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default Post;

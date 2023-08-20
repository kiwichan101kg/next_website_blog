import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles/post.module.css";
import { eyecatchLocal } from "../lib/constants";

export type PostType = {
  title: string;
  slug: string;
  eyecatch: { url: string; height: number; width: number };
};

const Post = ({ posts }: { posts: PostType[] }) => {
  // 取得した記事オブジェクトにeyecatchのプロパティがなかった場合ローカルeyecatchを設定する
  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
  }
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch }) => (
        <article className={styles.post}>
          <Link href={`/blog/${slug}`}>
            <figure>
              <Image
                layout="fill"
                objectFit="cover"
                sizes="(min-width:1152px)567px,50vw"
                src={eyecatch.url}
                alt={""}
                // width={eyecatch.width}
                // height={eyecatch.height}
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

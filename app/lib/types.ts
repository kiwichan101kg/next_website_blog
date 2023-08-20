// PostDetail の型定義
export type PostDetail = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  slug: string;
  publishDate: string;
  content: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  categories: Category[];
};

// Category の型定義
export type Category = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  slug: string;
};

export type Categories = {
  name: "テクノロジー";
  id: "technology";
  slug: "technology";
};

export type TitleList = Pick<PostDetail, "title" | "slug" | "eyecatch">;

import Image from "next/image";

import styles from "./blog.module.css";
import Link from "next/link";
import useSWR from "swr";
import { fetcher, imageLoader } from "@/app/_lib/strapi-rest";
export default function Blog(props: {articleId: string;}) {
  const { data, error } = useSWR("/api/blogs?populate=*&pagination[limit]=2&filters[id][$ne]=" + props.articleId + "&sort[0]=createdAt:desc", fetcher);
  
  return (
    <div className="mt-[100px] md:mt-[200px]">
      <p className={"dark-color font-semibold text-xl mb-2 " + styles.title}>
        Read more articles
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] md:gap-y-[64px]">
      {data?.data?.map((
                article: {
                  id: string;
                  attributes: {
                    date: string;
                    image: { data: { attributes: { url: string } } };
                    fullName: string;
                    title: string;
                    body: [{children: [{text: string}]}];
                    length: number;
                  };
                },
                index: number) => {
        return (
          <Link key={index} href={"/blog/post?id=" + article.id}>
            <div className={"col-span-1 " + styles.blog_article}>
              <Image
              loader={imageLoader}
                className="mb-4"
                alt={article?.attributes?.title + ' article thumbnail'}
                src={
                  article?.attributes?.image?.data?.attributes?.url
                }
                width={416}
                height={317}
              />
              <p className={styles.title}>{article?.attributes?.title}</p>
              <p className={styles.text}>{article?.attributes?.body[0].children[0].text}...</p>
              <p className="flex items-end mt-4">
                <span className={styles.name}>{article?.attributes?.fullName}</span>{" "}
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#111111" />
                </svg>
                <span className={styles.time}>{article?.attributes?.length} mins read</span>
              </p>
            </div>
          </Link>
        );
      })}
      </div>
    </div>
  );
}

import Image from "next/image";

import styles from "./blog.module.css";
import Link from "next/link";
import articles from "./data";
export default function BlogComponent(props: any) {
  const data = articles.slice(0, props.articleNumber);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] md:gap-y-[64px] mt-[40px] md:mt-[70px]">
      {data.map((article, index) => {
        return (
          <Link key={index} href={"/blog/post?id=" + index}>
            <div className={"col-span-1 " + styles.blog_article}>
              <Image
                className="mb-5"
                src={`/images/blog/${article.imageUrl}.png`}
                alt={article.title}
                width={416}
                height={317}
              />
              <p className={styles.title}>{article.title}</p>
              <p className={styles.text}>{article.text}</p>
              <p className="flex items-end mt-4">
                <span className={styles.name}>{article.name}</span>{" "}
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#111111" />
                </svg>
                <span className={styles.time}>{article.time} mins read</span>
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

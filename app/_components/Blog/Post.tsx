import Image from "next/image";

import styles from "./blog.module.css";
import Link from "next/link";
import articles from "./data";
export default function Blog(props: any) {
  const article = articles[0];
  const Dot = (props: { className: string | undefined }) => {
    return (
      <svg
        className={props.className}
        width="5"
        height="5"
        viewBox="0 0 5 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="2.5" cy="2.5" r="2.5" fill="#111111" />
      </svg>
    );
  };
  return (
    <div className="grid grid-cols-1 mb-[40px] md:mb-[80px]">
      <div className={"col-span-1 " + styles.blog_article}>
        <p className="dark-color mb-[8px] md:mb-[16px] text-xl">Blog</p>
        <h2 className={styles.h2 + " primary-color"}>{article.title}</h2>
        <p className="flex items-end mt-4">
          <span className={styles.name}>{article.name}</span>{" "}
          <Dot className="" />
          <span className={"hidden md:block " + styles.time}>
            {article.time} mins read
          </span>
          <Dot className="hidden md:block" />
          <span className={styles.time}>3rd September, 2023</span>
        </p>
        <Image
          className="mb-5 mt-[40px]  md:mt-[80px] mb-[32px] md:mb-[40px]"
          src={`/images/blog/7.png`}
          alt={article.title}
          width={416}
          height={317}
        />

        <p className={styles.p}>
          Google Search is a search engine provided and operated by Google.
          Handling more than 3.5 billion searches per day, it has a 92% share of
          the global search engine market. It is the most-visited website in the
          world. Additionally, it is the most searched and used search engine in
          the entire world.
        </p>
        <p className={styles.p}>
          Described by clients as “a formidable force”, “our go-to guy” and
          “good when you need someone to fight your corner”, Danny brings a
          wealth of experience, commercial acumen and strategic wisdom to his
          specialist areas of complex international commercial and financial
          disputes and investigations, as well as cross-border restructuring and
          insolvency.
        </p>
        <p className={styles.p}>
          Our founder experienced the loss of her mother at the age of 5, and
          growing up without a maternal figure, made her realise the importance
          of mothers in the socialisation of a child. With this in mind, she
          decided to ensure that no child or mother has to deal with the loss I
          experienced.
        </p>
        <p className={styles.p}>
          The UX field is very wide, and those who really learn seriously would
          know that. On my side, every day I swim in tabs to read and learn
          deeper to upgrade my knowledge, and the practice is never enough. The
          trend is over, so, entry-level UX Designers, let’s face the truth that
          now it is not easy and quick for you to switch to a UX career in a
          couple of months anymore. However, yeah, this is a chance for you to
          sit back and analyze yourself if you really have passion for this
          field or if it was because of the trend. Ask yourself if you are ok to
          take critiques on your design every day from stakeholders.
        </p>
      </div>
    </div>
  );
}

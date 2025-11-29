import Image from "next/image";
import React from "react";
import styles from "./blog.module.css";
import Link from "next/link";
import useSWR from "swr";
import { fetcher, imageLoader } from "@/app/_lib/strapi-rest";
import formatDate from "@/app/_lib/formatDate";
export default function Blog(props: any) {
  const { data } = useSWR(
    "/api/blogs/" + props.articleId + "?populate=*",
    fetcher
  );
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
        <p
          data-aos="fade-down"
          className="dark-color mb-[8px] md:mb-[16px] text-xl"
        >
          Blog
        </p>
        <h2
          data-aos="fade-down"
          style={{
            maxWidth: "700px",
          }}
          className={styles.h2 + " primary-color"}
        >
          {data?.data?.attributes?.title}
        </h2>
        <p data-aos="fade-down" className="flex items-end mt-4">
          <span className={styles.name}>
            {data?.data?.attributes?.fullName}
          </span>{" "}
          <Dot className="" />
          <span className={"hidden md:block " + styles.time}>
            {data?.data?.attributes?.length} mins read
          </span>
          <Dot className="hidden md:block" />
          <span className={styles.time}>
            {formatDate(data?.data?.attributes?.publishedAt)}
          </span>
        </p>
        <Image
          loader={imageLoader}
          className="mb-5 mt-[40px]  md:mt-[80px] mb-[32px] md:mb-[40px]"
          alt={data?.data?.attributes?.title + " article banner"}
          src={data?.data?.attributes?.image?.data?.attributes?.url}
          width={416}
          height={317}
        />
        {data?.data?.attributes?.text.map((obj: any, index: any) => {
          if (obj.type === "heading") {
            return (
              <h3
                className={styles.heading + " mt-4"}
                key={index}
                style={{
                  fontStyle: obj.children[0].italic ? "italic" : "normal",
                  textDecoration: obj.children[0].underline ? "underline" : "",
                  fontWeight: obj.children[0].bold ? "600" : "",

                }}
              >
                {obj.children[0].text}
              </h3>
            );
          } else if (obj.type === "image") {
            return (
              <Image
                alt={obj?.image?.alternativeText}
                src={obj?.image?.url}
                height={obj?.image?.height}
                width={obj?.image?.width}
                key={index}
                style={{ width: "100%", height: "auto" }}
              />
            );
          } else {
            return (
              <p
                style={{
                  fontStyle: obj.children[0].italic ? "italic" : "normal",
                  textDecoration: obj.children[0].underline ? "underline" : "",
                  fontWeight: obj.children[0].bold ? "600" : "",
                }}
                className={styles.p}
                key={index}
              >
                {obj.children[0].text}
              </p>
            );
          }
        })}
      </div>
    </div>
  );
}

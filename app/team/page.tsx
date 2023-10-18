"use client";
import { useState } from "react";
import TopNav from "../_components/TopNav/TopNav";
import styles from "./page.module.css";
import Image from "next/image";

export default function Team() {
  const [lawyers, setLawyers] = useState([
    {
      image: "/images/lawyer.png",
      name: "Alice Smith",
      title: "Senior Partner",
    },
    {
      image: "/images/lawyer-2.png",
      name: "Hannah Wilson",
      title: "Senior Partner",
    },
    {
      image: "/images/lawyer-3.png",
      name: "Emma Brown",
      title: "Senior Partner",
    },
    {
      image: "/images/lawyer.png",
      name: "Bob Johnson",
      title: "Associate Attorney",
    },
    {
      image: "/images/lawyer-2.png",
      name: "Fiona Davis",
      title: "Associate Attorney",
    },
    {
      image: "/images/lawyer-3.png",
      name: "Charlie Williams",
      title: "Legal Counsel",
    },
    {
      image: "/images/lawyer.png",
      name: "George Miller",
      title: "Legal Counsel",
    },
    {
      image: "/images/lawyer-2.png",
      name: "Ivy Moore",
      title: "Junior Associate",
    },
    {
      image: "/images/lawyer-3.png",
      name: "David Jones",
      title: "Junior Associate",
    },
  ]);
  return (
    <>
      <TopNav />
      <main>
        <div
          style={{
            backgroundImage: "url(/images/happy-employees-3.png)",
            maxHeight: "550px",
          }}
          className={
            styles.image_banner +
            " text-white container-padding flex flex-col justify-center items-center text-left"
          }
        >
          <div className=" w-[593px] max-w-full text-center">
            <h1 className={styles.h2}>
              Our Lawyers are leaders in their fields.
            </h1>
            <div className="relative my-4">
              <input
                className={styles.input}
                type="text"
                placeholder="Search for Lawyers"
              />
              <svg
                className={styles.search_icon}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  stroke="#87265B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 22L20 20"
                  stroke="#87265B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p>
              <span style={{ color: "rgba(255, 255, 255, 0.80)" }}>
                Search by:{" "}
              </span>
              <span>name, position, leadership position</span>
            </p>
          </div>
        </div>
        {lawyers.length > 0 && (
          <section className="grid grid-cols-1 gap-x-[32px] gap-y-[36px] md:grid-cols-3 container-padding my-[80px] md:my-[160px]">
            {lawyers.map((lawyer, index) => {
              return (
                <div key={index} className="col-span-1" data-aos="fade">
                  <div className=" mb-2 bg-light relative h-[320px] md:h-[340px] xl:h-[410px]">
                    <Image alt="a lawyer" src={lawyer.image} fill />
                  </div>
                  <p className="dark-color font-semibold">{lawyer.name}</p>
                  <p className="primary-color">{lawyer.title}</p>
                </div>
              );
            })}
          </section>
        )}

        <div
          style={{
            backgroundImage: "url(/images/employees-in-office-3.png)",
          }}
          className={
            styles.image_banner +
            " container-padding flex flex-col justify-end overflow-hidden"
          }
        >
          <h4
            data-aos="slide-up"
            className={styles.h2 + " max-w-[693px] text-white "}
          >
            we are driven by{" "}
          </h4>
          <h4
            data-aos="slide-up"
            className={styles.h2 + " max-w-[693px] pb-[80px] md:pb-[160px]"}
          >
            excellence, creativity & professionalism
          </h4>
        </div>
      </main>
    </>
  );
}

"use client";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import TopNav from "./_components/TopNav/TopNav";
import styles from "./page.module.css";
import Link from "next/link";
import Blog from "./_components/Blog/Blog";

import React, { useEffect, useRef, useState } from "react";
import ShadowDiv from "./_components/ShadowDiv";
import gsap from "gsap";
export default function Home() {
  const [resources, setResources] = useState([
    {
      title: "Corporate Law",
      subTitle: [
        { text: "Fintech", id: "fintech" },
        { text: "Banking & Finance", id: "banking-finance" },
        { text: "Capital Markets", id: "capital-markets" },
        {
          text: "Mergers and Acquisitions and Private Equity",
          id: "mergers-acquisitions",
        },
        { text: "Taxation", id: "taxation" },
      ],
      isOpen: false,
    },
    {
      title: "Dispute Resolution",
      subTitle: [
        { text: "Alternative Dispute Resolution (ADR)", id: "adr" },
        { text: "Litigation", id: "litigation" },
      ],
      isOpen: false,
    },
    {
      title: "Energy, Projects & Infrastructure",
      subTitle: [
        {
          text: "Energy, Projects & Infrastructure",
          id: "energy-projects-infrastructure",
        },
      ],
      isOpen: false,
    },
    {
      title: "Intellectual Property & Technology",
      subTitle: [
        { text: "Entertainment Law", id: "entertainment-law" },
        { text: "Intellectual Property", id: "intellectual-property" },
        { text: "Technology Law", id: "technology-law" },
      ],
      isOpen: false,
    },
    {
      title: "International Trade",
      subTitle: [
        { text: "Aviation", id: "aviation" },
        { text: "International Trade", id: "international-trade" },
        { text: "Shipping", id: "shipping" },
      ],
      isOpen: false,
    },
    {
      title: "Immigration & International Law",
      subTitle: [
        { text: "Immigration", id: "immigration" },
        { text: "International Law", id: "international-law" },
      ],
      isOpen: false,
    },
  ]);

  const toggleResource = (index: number) => {
    const copyOfResources = [...resources];
    if (copyOfResources[index].isOpen) {
      copyOfResources[index].isOpen = false;
      gsap.to(".resource_" + index, { height: 0, duration: 0.5 });
    } else {
      copyOfResources[index].isOpen = true;
      gsap.to(".resource_" + index, { height: "auto", duration: 0.5 });
    }

    setResources(copyOfResources);
  };

  return (
    <>
      <TopNav />
      <main>
        <section className={styles.hero_section}>
          <h1 data-aos="fade">
            <span>a </span>
            <span className="primary-color">
              <Typewriter
                options={{
                  strings: ["world-class", "prestigious", "spectacular"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <span> law firm</span>
          </h1>
          <h1 data-aos="fade">
            with African roots. We are driven by excellence, professionalism and
            creativity.
          </h1>
          <div className={styles.map_container}>
            <Image alt="world map" src="/images/world-map.svg" fill />
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 bg-light px-[24px] py-[80px] md:px-[117px] md:py-[160px] overflow-hidden">
          <div className="col-span-1 md:pe-[32px] mb-[40px]" data-aos="fade-up">
            <p className="dark-color mb-[8px] md:mb-[16px] text-xl md:text-2xl">
              About us
            </p>
            <span className={"primary-color " + styles.h2}>
              We partner with our clients to solve the{" "}
            </span>
            <span className={"gray-color " + styles.h2}>
              knottiest legal problems and provide creative legal solutions.
            </span>
          </div>
          <div className="col-span-1" data-aos="fade">
            <p className="p mb-[16px] md:mb-[24px] font-light">
              Danol Partners is a full-service law firm established with a
              resolve to provide creative, practical, and cutting-edge legal
              solutions to its clients. Our goal is to leave our clients
              satisfied with our best-in-class, commercially-minded legal
              advisory/ representation.
            </p>
            <p className="p mb-[16px] md:mb-[24px] font-light">
              We are equipped to provide services in different areas of the law
              which include, but are not limited to; corporate commercial law,
              mergers and acquisitions, taxation advisory, dispute resolution,
              aviation law, intellectual property, etc.
            </p>
            <p className="p mb-[16px] md:mb-[24px] font-light">
              Our Lawyers are the crème de la crème of the legal services
              industry. They are highly skilled, vastly knowledgeable, and
              extremely experienced on the issues they advise clients on.
            </p>
            <div>
              <Link href="about-us">
                <button className="button button-primary mr-[20px] md:mr-[32px]">
                  Find out more
                </button>
              </Link>
              <Link href="contact">
                <button className="button button-primary-outline">
                  Contact us
                </button>
              </Link>
            </div>
          </div>
        </section>
        <div
          style={{
            backgroundImage: "url(/images/happy-employees.png)",
          }}
          className={styles.image_banner + " relative"}
        >
          <ShadowDiv />
        </div>
        <section className="bg-light px-[24px] py-[80px] md:px-[112px] md:py-[160px]">
          <div
            className="flex flex-col items-center text-center mb-[40px] md:mb-[128px]"
            data-aos="fade"
          >
            <p className="dark-color mb-[8px] md:mb-[16px] text-xl md:text-2xl">
              Our Services
            </p>
            <h2 className={"primary-color max-w-[880px] " + styles.h2}>
              We provide expert legal advice in a wide range of practice areas.
            </h2>
            <Link href="services">
              <button className="button button-primary mt-[24px] md:mt-[32px]">
                Find out more
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-5">
            {resources.map((resource, index) => {
              return (
                <div
                  data-aos="fade-up"
                  key={index}
                  className={styles.resource_container}
                >
                  <div
                    onClick={() => toggleResource(index)}
                    className={
                      "flex justify-between items-center " + styles.upper_div
                    }
                  >
                    <div>
                      <h4 className="primary-color">{resource.title}</h4>
                    </div>
                    <div>
                      {resource.isOpen ? (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19"
                            stroke="#87265B"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 5V19"
                            stroke="#87265B"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5 12H19"
                            stroke="#87265B"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className={styles.resource + " resource_" + index}>
                    {resource.subTitle.map((title, index) => {
                      return (
                        <p key={index}>
                          <Link href={"/services#" + title.id}>
                            {title.text}
                          </Link>
                        </p>
                      );
                    })}{" "}
                    <span></span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section
          className={styles.hero_section + " relative " + styles.section_tp}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1" data-aos="fade">
              <div className="mb-[40px] md:mb-[80px]">
                <p className="dark-color mb-[8px] md:mb-[16px] text-xl md:text-2xl">
                  Our Values
                </p>
                <h3 className={"primary-color " + styles.h3}>
                  At Danol Partners,
                </h3>
                <h3 className={"gray-color " + styles.h3}>
                  {" "}
                  our values are at the core of our culture.
                </h3>
              </div>
              <div
                className="relative"
                style={{
                  borderLeft: "4px solid #E9E9E9",
                }}
              >
                <div className="pb-5 ps-5">
                  <p className="primary-color font-semibold">
                    Culture of Excellence
                  </p>
                  <p className={styles.small_p}>
                    We have a culture of excellence at Danol Partners. Our
                    lawyers are high flyers who relentlessly pursue excellence
                    and ensure that they deliver top-notch legal services to our
                    diverse clientele
                  </p>
                </div>
                <div className="pb-5 ps-5">
                  <p className="primary-color font-semibold">Creativity</p>
                  <p className={styles.small_p}>
                    We are constantly striving to provide creative solutions to
                    both settled and novel legal issues.
                  </p>
                </div>
                <div className="pb-5 ps-5">
                  <p className="primary-color font-semibold">Professionalism</p>
                  <p className={styles.small_p}>
                    We ensure that all our clients have a good experience and
                    that all businesses are handled with the highest standards
                    of professionalism.
                  </p>
                </div>
                <div className={styles.animated_border} />
              </div>
            </div>
            <div className={"col-span-1 hidden md:block " + styles.right_image}>
              <Image
                src="/images/employees-in-office.png"
                alt="employees in the office"
                width={600}
                height={800}
              />
            </div>
          </div>
        </section>
        <div
          style={{
            backgroundImage: "url(/images/happy-employees-2.png)",
          }}
          className={
            styles.image_banner +
            " flex flex-col justify-center text-white container-padding md:p-[216px] relative"
          }
        >
          <ShadowDiv />
          <p className="mb-[8px] md:mb-[16px] text-xl md:text-2xl">Our Team</p>
          <h3 className={styles.h3 + " max-w-[550px]"}>
            Best in class lawyers providing quality legal services.
          </h3>
          <Link href="lawyers">
            <button className="button button-primary mt-[20px] md:mt-[30px]">
              Search for Lawyers
            </button>
          </Link>
        </div>
        <section className="container-padding my-[80px] md:mt-[145px]">
          <p
            className="dark-color mb-[8px] md:mb-[16px] text-xl md:text-2xl"
            data-aos="fade"
          >
            Our blog
          </p>
          <h4 className={styles.h2 + " primary-color"} data-aos="fade">
            Read our insights
          </h4>
          <h4 className={styles.h2} data-aos="fade">
            {" "}
            and stay up to date with our publications
          </h4>
          <Blog articleNumber={6} />
        </section>
        <div
          style={{
            backgroundImage: "url(/images/employees-in-office-2.png)",
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

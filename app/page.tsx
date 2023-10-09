"use client";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import TopNav from "./_components/TopNav/TopNav";
import styles from "./page.module.css";
import Link from "next/link";
import Blog from "./_components/Blog/Blog";

import React, { useEffect, useRef, useState } from "react";
const services = [
  {
    title: "Corporate Law",
    description:
      "Our team of accomplished lawyers exemplify this ethos as they soar to remarkable heights in their pursuit of legal excellence and their unwavering dedication ensures the delivery of unparalleled legal services to our diverse and esteemed clientele.",
  },
  {
    title: "Dispute Resolution",
    description:
      "Our team of accomplished lawyers exemplify this ethos as they soar to remarkable heights in their pursuit of legal excellence and their unwavering dedication ensures the delivery of unparalleled legal services to our diverse and esteemed clientele.",
  },
  {
    title: "International Trade",
    description:
      "Our team of accomplished lawyers exemplify this ethos as they soar to remarkable heights in their pursuit of legal excellence and their unwavering dedication ensures the delivery of unparalleled legal services to our diverse and esteemed clientele.",
  },
  {
    title: "Intellectual Property & Technology",
    description:
      "Our team of accomplished lawyers exemplify this ethos as they soar to remarkable heights in their pursuit of legal excellence and their unwavering dedication ensures the delivery of unparalleled legal services to our diverse and esteemed clientele.",
  },
  {
    title: "Energy, Projects & Infrastrastructure",
    description:
      "Our team of accomplished lawyers exemplify this ethos as they soar to remarkable heights in their pursuit of legal excellence and their unwavering dedication ensures the delivery of unparalleled legal services to our diverse and esteemed clientele.",
  },
];
export default function Home() {
  const elementRef = useRef<HTMLInputElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [top, setTop] = useState(0);

  // Function to check if the element is in the viewport
  const manipulateElement = () => {
    const element = elementRef.current;
    if (!element) return false;

    const rect = element?.getBoundingClientRect();
    if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      const scrollY = rect.top;
      const maxScroll = 66; // * (window.innerHeight / 100); // 66% of viewport height

      // Calculate the new top position within the range of 0 to maxScroll
      const newTop = Math.min(Math.max(scrollY, 0), maxScroll);

      //setTop(newTop);
      //console.log(rect.top);
    }
  };

  // Function to handle visibility changes
  const handleVisibility = () => {
    manipulateElement();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibility);
    window.addEventListener("resize", handleVisibility);

    // Initial check when the component mounts
    handleVisibility();

    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleVisibility);
      window.removeEventListener("resize", handleVisibility);
    };
  }, []);

  return (
    <>
      <TopNav />
      <main>
        <section className={styles.hero_section}>
          <h1>
            <span>a </span>
            <span className="primary-color">
              <Typewriter
                options={{
                  strings: ["world-class", "legendary", "spectacular"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <span> law firm.</span>
          </h1>
          <h1>
            with African roots. We are driven by excellence, professionalism and
            creativity.
          </h1>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 bg-light px-[24px] py-[80px] md:px-[117px] md:py-[160px]">
          <div className="col-span-1 md:pe-[32px] mb-[40px]">
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
          <div className="col-span-1">
            <p className="p mb-[16px] md:mb-[24px] font-light">
              Danol Partner's legal team has consistently taken a leading role
              in significant cases throughout the years, demonstrating a deep
              understanding of the legal landscape. We acknowledge that no two
              cases are identical.
            </p>
            <p className="p mb-[16px] md:mb-[24px] font-light">
              Recognizing and honoring the distinctive intricacies,
              sensitivities, and difficulties inherent in each case, Danol
              Partner leverages its extensive experience and expertise to
              provide clients with expert legal counsel and representation in
              high-stakes commercial disputes and crisis scenarios. All the
              while, we remain committed to our fundamental values of
              excellence, innovation, and professionalism.
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
          className={styles.image_banner}
        ></div>
        <section className="bg-light px-[24px] py-[80px] md:px-[112px] md:py-[160px]">
          <div className="flex flex-col items-center text-center mb-[40px] md:mb-[128px]">
            <p className="dark-color mb-[8px] md:mb-[16px] text-xl md:text-2xl">
              Our Services
            </p>
            <h2 className={"primary-color max-w-[880px] " + styles.h2}>
              We provide expert legal advice in a wide range of practice areas.
            </h2>
            <Link href="about-us">
              <button className="button button-primary mt-[24px] md:mt-[32px]">
                Find out more
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] md:gap-y-[64px]">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className={"col-span-1 " + styles.service_block}
                >
                  <h3 className={styles.title + " primary-color"}>
                    {service.title}
                  </h3>
                  <p className={styles.description}>{service.description}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section
          className={styles.hero_section + " relative " + styles.section_tp}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1">
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
                ref={elementRef}
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
                <div
                  className={styles.animated_border}
                  style={{
                    top: top + "%", // Add margin to create scrolling space
                  }}
                />
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
            " flex flex-col justify-center text-white container-padding md:p-[216px]"
          }
        >
          <p className="mb-[8px] md:mb-[16px] text-xl md:text-2xl">Our Team</p>
          <h3 className={styles.h3 + " max-w-[693px]"}>
            Best in class lawyers providing quality legal services.
          </h3>
          <Link href="lawyers">
            <button className="button button-primary mt-[20px] md:mt-[30px]">
              Search for Lawyers
            </button>
          </Link>
        </div>
        <section className="container-padding my-[80px] md:mt-[145px]">
          <p className="dark-color mb-[8px] md:mb-[16px] text-xl md:text-2xl">
            Our blog
          </p>
          <h4 className={styles.h2 + " primary-color"}>Read our insights</h4>
          <h4 className={styles.h2}>
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

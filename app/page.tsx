"use client";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import TopNav from "./_components/TopNav/TopNav";
import styles from "./page.module.css";
import Link from "next/link";

import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    gsap.registerPlugin(ScrollToPlugin);
  }, [])
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
        
        <section id="about" className="grid grid-cols-1 md:grid-cols-2 bg-light px-[24px] py-[80px] md:px-[117px] md:py-[160px] overflow-hidden">
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

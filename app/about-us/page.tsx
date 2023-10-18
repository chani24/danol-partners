"use client";
import ShadowDiv from "../_components/ShadowDiv";
import TopNav from "../_components/TopNav/TopNav";
import styles from "./page.module.css";
import Image from "next/image";

export default function About() {
  return (
    <>
      <TopNav />
      <main>
        <section className={styles.hero_section}>
          <p
            data-aos="fade"
            className="primary-color mb-[8px] md:mb-[16px] text-xl md:text-2xl"
          >
            About us
          </p>
          <h1 data-aos="fade">
            A world-class law firm <br />
            with African roots. We are driven by excellence, professionalism and
            creativity.
          </h1>
        </section>
        <section className="grid grid-cols-1 bg-light px-[24px] py-[40px] md:px-[250px] md:py-[80px]">
          <div className="col-span-1 md:pe-[32px] mb-[40px]">
            <p
              data-aos="fade-down"
              className="primary-color  mb-[8px] md:mb-[16px] text-xl md:text-2xl"
            >
              Our philosophy
            </p>
            <p
              data-aos="fade"
              data-aos-delay="200"
              className={"pb-[16px] md:pb-[32px] " + styles.p}
            >
              Danol Partners is a full-service law firm established with a
              resolve to provide creative, practical, and cutting-edge legal
              solutions to its clients.
            </p>
            <p
              data-aos="fade"
              data-aos-delay="400"
              className={"pb-[16px] md:pb-[32px] " + styles.p}
            >
              {" "}
              Our goal is to leave our clients satisfied with our best-in-class,
              commercially-minded legal advisory/ representation.
            </p>
            <p
              data-aos="fade"
              data-aos-delay="600"
              className={"pb-[16px] md:pb-[32px] " + styles.p}
            >
              We are equipped to provide services in different areas of the law
              which include, but are not limited to; corporate commercial law,
              mergers and acquisitions, taxation advisory, dispute resolution,
              aviation law, intellectual property, etc.
            </p>
            <p data-aos="fade" data-aos-delay="800" className={styles.p}>
              Our Lawyers are the crème de la crème of the legal services
              industry. They are highly skilled, vastly knowledgeable, and
              extremely experienced on the issues they advise clients on.
            </p>{" "}
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
        <section
          className={styles.hero_section + " relative " + styles.section_tp}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div
              className="col-span-1 flex flex-col justify-center md:pt-[40px]"
              data-aos="fade"
            >
              <div className="mb-[40px] md:mb-[64px]">
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
              <div className="relative">
                <div className="pb-5">
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
                <div className="pb-5">
                  <p className="primary-color font-semibold">Creativity</p>
                  <p className={styles.small_p}>
                    We are constantly striving to provide creative solutions to
                    both settled and novel legal issues.
                  </p>
                </div>
                <div className="pb-5">
                  <p className="primary-color font-semibold">Professionalism</p>
                  <p className={styles.small_p}>
                    We ensure that all our clients have a good experience and
                    that all businesses are handled with the highest standards
                    of professionalism.
                  </p>
                </div>
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

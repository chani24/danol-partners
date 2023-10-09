import TopNav from "../_components/TopNav/TopNav";
import styles from "./page.module.css";
const services = [
  {
    number: "01",
    title: "Culture of Excellence",
    description:
      "At Danol Partners, we uphold a culture of unwavering excellence that defines our commitment to the legal profession. Our team of accomplished lawyers exemplify this ethos as they soar to remarkable heights in their pursuit of legal excellence and their unwavering dedication ensures the delivery of unparalleled legal services to our diverse and esteemed clientele.",
  },
  {
    number: "02",
    title: "Creativity",
    description:
      "Our commitment revolves around consistently delivering innovative resolutions to well-established and emerging legal challenges. We dedicate ourselves to creative problem-solving, addressing both familiar and unique legal matters with ingenuity and precision. This unwavering dedication to innovation fuels our ability to provide clients with effective and forward-thinking legal solutions.",
  },
  {
    number: "03",
    title: "Professionalism",
    description:
      "Our core value lies in guaranteeing exceptional client experiences, coupled with unwavering professionalism in every facet of our business operations. Client satisfaction is our paramount concern, and we go to great lengths to ensure that each client interaction is marked by responsiveness, transparency, and a deep commitment to their best interests.",
  },
];
export default function About() {
  return (
    <>
      <TopNav />
      <main>
        <section className={styles.hero_section}>
          <p className="primary-color mb-[8px] md:mb-[16px] text-xl md:text-2xl">
            About us
          </p>
          <h1>
            A world-class law firm. <br />
            Fuelled by excellence, creativity and professionalism, we are built
            to provide best-in-class legal services to our clients.
          </h1>
        </section>
        <section className="grid grid-cols-1 bg-light px-[24px] py-[80px] md:px-[117px] md:py-[160px]">
          <div className="col-span-1 md:pe-[32px] mb-[40px]">
            <p className="dark-color mb-[8px] md:mb-[16px] text-xl md:text-2xl">
              Our philosophy
            </p>
            <p className={"primary-color pb-[16px] md:pb-[32px] " + styles.h2}>
              Danol Partners is a full-service law firm established with a
              resolve to provide creative, practical, and cutting-edge legal
              solutions to its clients.
            </p>
            <p className={"text-[#878787] pb-[16px] md:pb-[32px] " + styles.h2}>
              {" "}
              Our goal is to leave our clients satisfied with our best-in-class,
              commercially-minded legal advisory/ representation.
            </p>
            <p className={"primary-color pb-[16px] md:pb-[32px] " + styles.h2}>
              We are equipped to provide services in different areas of the law
              which include, but are not limited to; corporate commercial law,
              mergers and acquisitions, taxation advisory, dispute resolution,
              aviation law, intellectual property, etc.
            </p>
            <p className={"text-[#878787] " + styles.h2}>
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
          className={styles.image_banner}
        ></div>
        <section className={styles.hero_section + " " + styles.section_sp}>
          <div className="flex flex-col items-center text-center mb-[40px] mb:mb-[128px]">
            <p className="dark-color mb-[8px] md:mb-[16px] text-xl md:text-2xl">
              Our Values
            </p>
            <h2 className={"primary-color max-w-[880px] " + styles.h2}>
              At Danol Partners,
            </h2>
            <h2 className={"text-[#939393] max-w-[880px] " + styles.h2}>
              {" "}
              our values are at the core of our culture.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] md:gap-y-[64px]">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className={"col-span-1 " + styles.service_block}
                >
                  <p className={styles.number}>{service.number}</p>
                  <h3 className={styles.title + " primary-color"}>
                    {service.title}
                  </h3>
                  <p className={styles.description}>{service.description}</p>
                </div>
              );
            })}
          </div>
        </section>
        <div
          style={{
            backgroundImage: "url(/images/employees-in-office-2.png)",
          }}
          className={
            styles.image_banner + " container-padding flex flex-col justify-end"
          }
        >
          <h4 className={styles.h2 + " max-w-[693px] text-white "}>
            we are guided by{" "}
          </h4>
          <h4 className={styles.h2 + " max-w-[693px] pb-[80px] md:pb-[160px]"}>
            excellence, creativity & professionalism
          </h4>
        </div>
      </main>
    </>
  );
}

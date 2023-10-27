"use client";
import { useEffect, useState } from "react";
import TopNav from "../../_components/TopNav/TopNav";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";
const services = [
  {
    title: "Corporate Law",
    details: [
      {
        id: "fintech",
        title: "Fintech",
        description: (
          <>
            <p data-aos="fade">
              The role of technology in the finance sector cannot be
              overemphasized. As a result, the application of technological
              solutions and innovations to financial services has increased over
              the last couple of years.
            </p>
            <p data-aos="fade">
              At Danol Partners, our skilled lawyers offer best-in-class
              advisory services on the legal and commercial risks associated
              with the Fintech industry. We also provide legal solutions to our
              clients on any matter that may arise from the application of such
              technologies.
            </p>
            <p data-aos="fade">
              Our expertise in this industry also extends to the transactional
              aspects of the fintech industry such as; capital raises, seed
              financing, etc. We advise both investors and start-ups innovating
              around the most complicated societal problems.
            </p>
          </>
        ),
      },
      {
        id: "banking-finance",
        title: "Banking & Finance",
        description: (
          <>
            <p data-aos="fade">
              Our Banking and Finance team houses seasoned experts who have
              acted for lenders and borrowers on some of the most sophisticated
              deals in the market. Our team also advises on banking regulations
              for both local and international clients.
            </p>
            <p data-aos="fade">
              We provide innovative financial solutions on areas such as loan
              syndications, asset finance, real estate investments, secured and
              unsecured finance, debt financing, equity financing, etc.
            </p>
          </>
        ),
      },
      {
        id: "capital-markets",
        title: "Capital Markets",
        description: (
          <>
            <p data-aos="fade">
              Our team has an excellent grasp of the capital market and its
              regulations. This equips us to advise to our clients from listings
              to capital raises.
            </p>
            <p data-aos="fade">
              We offer a host of services such as public offerings and private
              placements of debt and equity, issuances, securitisations,
              derivatives, corporate trust structures, and other capital market
              products.
            </p>
            <p data-aos="fade">
              We stay on top of the ever-evolving laws and regulations in the
              capital markets space to provide clients with solutions to complex
              transactions in the most efficient and creative manner.
            </p>
          </>
        ),
      },
      {
        id: "mergers-acquisitions",
        title: "Mergers and Acquisitions and Private Equity",
        description: (
          <p data-aos="fade">
            Our M&A and PE team boasts of a team of lawyers who have years of
            experience in advising on M & A and PE deals. Our team is able to
            advise on all stages of M&A transactions in various sectors from the
            due diligence stage to the deals stage. Our lawyers also advise on
            structuring of PE funds, deal documentation, investing and exits for
            clients on PE deals.
          </p>
        ),
      },
      {
        id: "taxation",
        title: "Taxation",
        description: (
          <>
            <p data-aos="fade">
              At Danol Partners, our team boasts of world-class tax lawyers with
              experiencing advising local and international clients as well as
              local and foreign governments on tax issues, tax structuring and
              tax compliance.
            </p>
            <p data-aos="fade">
              We have an in-depth understanding of the Nigerian and
              international tax system which enables us to provide expert advice
              to our clients on tax liabilities arising from transactions,
              representation in tax controversy, and tax advisory on the
              effective tax structures to adopt for projects.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Dispute Resolution",
    details: [
      {
        id: "adr",
        title: "Alternative Dispute Resolution (ADR)",
        description: (
          <>
            <p data-aos="fade">
              Our dispute resolution team represents clients in arbitration and
              all other forms of alternative dispute resolution. The practice
              group ensures that matters are resolved quickly, without recourse
              to long courtroom battles.
            </p>
            <p data-aos="fade">
              Our arbitration team is well-versed in arbitration rules like ICC
              and LCIA and have mastered the art of mediation and negotiations.
              The team prides itself in being able to get the best deals for
              clients, no matter how complex the matters are.
            </p>
          </>
        ),
      },
      {
        id: "litigation",
        title: "Litigation",
        description: (
          <>
            <p data-aos="fade">
              At Danol Partners, we prosecute and defend litigation matters at
              all levels of Courts and Tribunals across the country. We have an
              excellent grasp of the Nigerian judicial system which enables us
              deliver world-class solutions to our clients.
            </p>
            <p data-aos="fade">
              The litigation practice ensures that disputes arising from the
              business and commercial activities of clients are effectively
              resolved within minimum time and reasonable resources of our
              clients.
            </p>
            <p data-aos="fade">
              Our litigation group is a key practice group that works hand in
              hand with all other practice groups to meet clients’ needs from
              time to time.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Energy, Projects & Infrastructure",
    details: [
      {
        id: "energy-projects-infrastructure",
        title: "",
        description: (
          <>
            <p data-aos="fade">
              Our Energy, Projects & Infrastructure practice group provides
              legal and commercial services on complex oil, gas, power, and
              mining projects in the upstream, midstream, and downstream energy
              industry. We also advise on the divestment of oil and gas assets.
            </p>
            <p data-aos="fade">
              We are knowledgeable in all areas of infrastructure financing and
              development, and we advise clients on issues ranging from
              financing to planning and construction.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Intellectual Property & Technology",
    details: [
      {
        id: "entertainment-law",
        title: "Entertainment Law",
        description: (
          <>
            <p data-aos="fade">
              We provide legal advisory services for clients in various aspects
              of the entertainment industry, ranging from: music, fashion,
              advertising, film, television, and other areas of the creative
              arts.
            </p>
            <p data-aos="fade">
              Our services include: preparing contracts regulating the
              relationship between players in the entertainment industry,
              ensuring client compliance with all entertainment laws in force as
              well as guidelines from regulatory bodies, and advising clients on
              all legal issues faced by our clients in the entertainment
              industry.
            </p>
          </>
        ),
      },
      {
        id: "intellectual-property",
        title: "Intellectual Property",
        description: (
          <>
            <p data-aos="fade">
              The intellectual property team works with clients to ensure
              protection for their brands, intangible assets, inventions,
              designs, as well as licensing and usage of their creative work.
            </p>
            <p data-aos="fade">
              Our lawyers have a proper understanding of all intellectual
              property laws and regulations and are well-positioned to advice on
              copyrights, trademarks, and patents as the case may be.
            </p>
          </>
        ),
      },
      {
        id: "technology-law",
        title: "Technology Law",
        description: (
          <>
            <p data-aos="fade">
              We provide legal advisory services for clients using technology to
              create innovative products. Our Technology Law team is staffed
              with a world-class team of lawyers well-versed in the legal and
              commercial aspects of the industry.
            </p>
            <p data-aos="fade">
              Our lawyers are equipped to provide services such as early stage
              documentation and establishment, investment transactions, data
              protection advisory, product development and partnerships, due
              dilligence and regulatory and compliance.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "International Trade",
    details: [
      {
        id: "aviation",
        title: "Aviation",
        description: (
          <p data-aos="fade">
            At Danol Partners, we advise our clients on legal issues in all
            aspects of the aviation industry. We offer services to airlines,
            aircraft financing and leasing companies, aviation financiers,
            aviation logistics companies, aviation insurers, etc. We ensure that
            all regulatory and compliance requirements are met. We also advice
            on passenger and carrier rights and liabilities.
          </p>
        ),
      },
      {
        id: "international-trade",
        title: "International Trade",
        description: (
          <p data-aos="fade">
            Our international trade team is well-versed in all national and
            international laws guiding international trade, customs regulations,
            tariffs, etc. within Nigeria. Our lawyers are equipped to advice
            clients on any risk or disputes that may arise in the course of
            their cross-border trade.
          </p>
        ),
      },
      {
        id: "shipping",
        title: "Shipping",
        description: (
          <p data-aos="fade">
            Our shipping team is staffed with lawyers who have years of
            experience in the maritime industry and who advise clients on all
            areas of shipping including but not limited to: maritime financing,
            carriage of goods by sea, cabotage, bills of ladings, vessel
            ownership, flag registrations, marine insurance, ship sale, and
            purchase, etc.
          </p>
        ),
      },
    ],
  },
  {
    title: "Immigration & International Law",
    details: [
      {
        id: "immigration",
        title: "Immigration",
        description: (
          <p data-aos="fade">
            Our expert team of immigration lawyers is available to assist you
            with all aspects of the individual and business immigration process.
            We have an in-depth understanding of the regulatory issues related
            to employment-based visas, expatriate quotas, business permits, and
            so on.
          </p>
        ),
      },
      {
        id: "international-law",
        title: "International Law",
        description: (
          <p data-aos="fade">
            Danol Partners boasts of a high-profile international law team that
            is available to advise you on international law issues and
            representation before international and regional courts.
          </p>
        ),
      },
    ],
  },
];

function findServiceById(id: string) {
  for (const service of services) {
    for (const detail of service.details) {
      if (detail.id === id) {
        return { title: service.title, detail: detail };
      }
    }
  }
  return null; // Return null if no matching element is found
}

export default function Services({ params }: { params: { slug: string } }) {
  const [services] = useState(findServiceById(params.slug));
  const router = useRouter();
  useEffect(() => {
    if (params.slug === "" || !params.slug || !services)
      router.replace("/services");
  }, []);

  return (
    <>
      <TopNav />
      <main>
        <div
          style={{
            backgroundImage:
              "url(/images/services/" + services?.detail?.id + ".png)",
            maxHeight: "322px",
          }}
          className={
            styles.image_banner +
            " text-white container-padding flex flex-col justify-center items-center text-center"
          }
        >
          <h1 data-aos="fade-up" className={styles.h2 + " max-w-[693px]"}>
            {services?.detail?.title || services?.title}
          </h1>
        </div>
        <section className="grid grid-cols-1 bg-[#F8F8F8] px-[24px] py-[40px] md:px-[250px] md:py-[80px]">
          <div className="text-[#10060B] col-span-1 grid grid-cols-1 gap-[16px] gap-[24px] md:pe-[32px] mb-[40px]">
            <p className="primary-color text-base font-semibold">
<span className={styles.title_gray}>{services?.title} {services?.detail?.title && ">"}</span>{" "}
              {services?.detail?.title}
            </p>

            <p className=" grid gap-[8px]">{services?.detail.description}</p>
          </div>
        </section>

        <div
          style={{
            backgroundImage: "url(/images/employees-in-office-3.png)",
          }}
          className={
            styles.image_banner +
            " container-padding flex flex-col justify-end  overflow-hidden"
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

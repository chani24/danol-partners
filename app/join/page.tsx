import TopNav from "../_components/TopNav/TopNav";
import styles from "./page.module.css";

export default function Join() {
  return (
    <>
      <TopNav />
      <main>
        <div
          style={{
            backgroundImage: "url(/images/lawyers.png)",
            maxHeight: "322px",
          }}
          className={
            styles.image_banner +
            " text-white container-padding flex flex-col justify-center items-center text-center"
          }
        >
          <p className="mb-[12px] font-light">Join Us</p>
          <h1 data-aos="fade-up" className={styles.h3 + " max-w-[693px]"}>
            Interested in joining a world-class law firm tackling some of the
            most interesting legal problems of your generation?
          </h1>
        </div>
        <section className="grid grid-cols-1 bg-[#F8F8F8] px-[24px] py-[40px] md:px-[200px] md:py-[80px]">
          <div className=" text-[#10060B] col-span-1 md:pe-[32px] mb-[40px]">
            <p data-aos="fade" className={"mb-[16px] md:mb-[24px] "}>
              At Danol Partners our lawyers are high-flyers who are passionate
              about the law and obsessed with providing the best commercial
              value for our clients.{" "}
            </p>
            <p data-aos="fade" className={"mb-[16px] md:mb-[24px] "}>
              We are intentional with our recruitment of best-in-class lawyers
              who have the required skill set to excel in a career in the legal
              services industry. Our lawyers are brilliant and they embody our
              values: culture of excellence, creativity, and professionalism.
            </p>
            <p data-aos="fade" className={"mb-[16px] md:mb-[24px] "}>
              A career at Danol Partners promises to be a great opportunity. You
              will work on highly sophisticated and complex transactions. You
              will also meet people, work in teams, and expand your network.
            </p>
            <p data-aos="fade" className={"mb-[16px] md:mb-[24px] "}>
              If are interested in working with us, please send your CV to us
              at: info@danolpartners.com and we will be in touch.
            </p>
            <p data-aos="fade">
              Note that only applications sent to info@danolpartners.com will be
              treated
            </p>
          </div>
        </section>

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
            data-aos="fade"
            className={styles.h2 + " max-w-[693px] text-white "}
          >
            we are driven by{" "}
          </h4>
          <h4
            data-aos="fade"
            className={styles.h2 + " max-w-[693px] pb-[80px] md:pb-[160px]"}
          >
            excellence, creativity & professionalism
          </h4>
        </div>
      </main>
    </>
  );
}

import TopNav from "../_components/TopNav/TopNav";
import styles from "./page.module.css";

export default function Join() {
  return (
    <>
      <TopNav />
      <main>
        <div
          style={{
            backgroundImage: "url(/images/happy-employees-3.png)",
            maxHeight: "600px",
          }}
          className={
            styles.image_banner +
            " text-white container-padding flex flex-col justify-center items-center text-center"
          }
        >
          <p className="font-[16px] md:font-[24px] mb-[16px] md:mb-[24px]">
            Join Us
          </p>
          <h1
            data-aos="fade-up"
            className={styles.h3 + " max-w-[693px] pb-[80px] md:pb-[160px]"}
          >
            Interested in joining a world-class law firm tackling some of the
            most interesting legal problems of your generation?
          </h1>
        </div>
        <section className="grid grid-cols-1 bg-[#F8F8F8] px-[24px] py-[80px] md:px-[117px] md:py-[160px]">
          <div className="col-span-1 md:pe-[32px] mb-[40px]">
            <p className="dark-color mb-[8px] md:mb-[16px] text-xl md:text-2xl">
              Danol Partners
            </p>
            <p
              data-aos="fade"
              className={"primary-color mb-[16px] md:mb-[2px] " + styles.h3}
            >
              At Danol Partners our lawyers are high-flyers who are passionate
              about the law and obsessed with providing the best commercial
              value for our clients.{" "}
            </p>
            <br />
            <p
              data-aos="fade"
              data-aos-delay="300"
              className={"gray-color " + styles.h3}
            >
              We are intentional with our recruitment of best-in-class lawyers
              who have the required skill set to excel in a career in the legal
              services industry. Our lawyers are brilliant and they embody our
              values: culture of excellence, creativity, and professionalism.
            </p>
          </div>
        </section>

        <div
          style={{
            backgroundImage: "url(/images/happy-employees-2.png)",
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

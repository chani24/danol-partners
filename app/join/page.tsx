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
          }}
          className={
            styles.image_banner +
            " text-white container-padding flex flex-col justify-center items-center text-center"
          }
        >
          <h1 className={styles.h2 + " max-w-[693px] pb-[80px] md:pb-[160px]"}>
            Join Our Team
          </h1>
        </div>
        <section className="grid grid-cols-1 bg-light px-[24px] py-[80px] md:px-[117px] md:py-[160px]">
          <div className="col-span-1 md:pe-[32px] mb-[40px]">
            <p className="dark-color mb-[8px] md:mb-[16px] text-xl md:text-2xl">
              Danol Partners
            </p>
            <span
              className={"primary-color " + styles.h2 + " " + styles.h2_large}
            >
              At Danol Partners our lawyers are high-flyers who are passionate
              about the law and obsessed with providing the best commercial
              value for our clients.{" "}
            </span>
            <br />
            <span className={"gray-color " + styles.h2 + " " + styles.h2_large}>
              We are intentional with our recruitment of best-in-class lawyers
              who have the required skill set to excel in a career in the legal
              services industry. Our lawyers are brilliant and they embody our
              values: culture of excellence, creativity, and professionalism.
            </span>
          </div>
        </section>

        <div
          style={{
            backgroundImage: "url(/images/happy-employees-2.png)",
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

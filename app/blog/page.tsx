import BlogComponent from "../_components/Blog/Blog";
import TopNav from "../_components/TopNav/TopNav";
import styles from "./page.module.css";

export default function Blog() {
  return (
    <>
      <TopNav />
      <main>
        <section className={styles.hero_section}>
          <p
            data-aos="fade"
            className="primary-color mb-[8px] md:mb-[16px] text-xl md:text-2xl"
          >
            Our Blog
          </p>
          <h1 data-aos="fade">
            <span className="primary-color">Read our insights and</span> stay up
            to date with our publications
            <br />
          </h1>
        </section>
        <div className="container-padding">
          <BlogComponent articleNumber={9} />
        </div>

        <div
          style={{
            backgroundImage: "url(/images/employees-in-office-2.png)",
          }}
          className={
            styles.image_banner +
            " container-padding flex flex-col justify-end mt-[60px] md:mt-[100px]  overflow-hidden"
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

import TopNav from "../_components/TopNav/TopNav";
import styles from "./page.module.css";

export default function Team() {
  return (
    <>
      <TopNav />
      <main>
        <div
          style={{
            backgroundImage: "url(/images/employees.png)",
            maxHeight: "550px",
          }}
          className={
            styles.image_banner +
            " text-white container-padding flex flex-col justify-center items-center text-left"
          }
        >
          <div className=" max-w-[693px] pb-[80px] md:pb-[160px] text-center">
            <h1 className={styles.h2}>
              Our Lawyers are leaders in their fields.
            </h1>
            <div className="relative my-4">
              <input
                className={styles.input}
                type="text"
                placeholder="Search for Lawyers"
              />
              <svg
                className={styles.search_icon}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  stroke="#87265B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 22L20 20"
                  stroke="#87265B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <p>
              Search by: <span>name, position, leadership position</span>
            </p>
          </div>
        </div>
        {/*<section className="grid grid-cols-1 bg-light px-[24px] py-[80px] md:px-[117px] md:py-[160px]"></section>*/}

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

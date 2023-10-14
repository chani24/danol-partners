import TopNav from "../_components/TopNav/TopNav";
import styles from "./page.module.css";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <TopNav />
      <main>
        <section className={styles.hero_section}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[80px] gap-y-[40px]">
            <div className="col-span-1" data-aos="fade">
              <p className="primary-color mb-[8px] md:mb-[16px] text-xl md:text-2xl">
                Contact Us
              </p>
              <h1>We would love to hear from you!</h1>
            </div>
            <div className="col-span-1 hidden md:block"></div>
            <div className="col-span-1">
              <form>
                <div className="grid grid-cols-1 gap-[16px]">
                  <div className="col-span-1">
                    <label>Full Name</label>
                    <input />
                  </div>
                  <div className="col-span-1">
                    <label>Email Address</label>
                    <input />
                  </div>
                  <div className="col-span-1">
                    <label>Message</label>
                    <textarea />
                  </div>
                  <div className="col-span-1">
                    <button className="button button-primary w-full">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-span-1 flex items-center">
              <div className="grid grid-cols-1 gap-[32px]">
                <h3 className={styles.h3 + " col-span-1 md:pb-[32px]"}>
                  You can also reach out via the following.
                </h3>
                <div className="col-span-1">
                  <label>Email</label>
                  <p>info@danolpartners.com</p>
                </div>
                {false && (
                  <div className="col-span-1">
                    <label>Address</label>
                    <p>45, Aiyetoro Street, Aguda, Surulere, Lagos.</p>
                  </div>
                )}
                <div className="col-span-1">
                  <label>Social Media</label>
                  <div className="flex gap-3 mt-3">
                    <a
                      href="https://www.linkedin.com/company/danolpartners/"
                      target="_blank"
                    >
                      <div className={styles.social_logo}>
                        <Image
                          alt="linkedin logo"
                          height={40}
                          width={40}
                          src="/images/linkedin.svg"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
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

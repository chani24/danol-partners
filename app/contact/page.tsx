import TopNav from "../_components/TopNav/TopNav";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <>
      <TopNav />
      <main>
        <section className={styles.hero_section}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[80px] gap-y-[40px]">
            <div className="col-span-1">
              <p className="primary-color mb-[8px] md:mb-[16px] text-xl md:text-2xl">
                Contact Us
              </p>
              <h1>Reach out to us today, let's help you solve that case.</h1>
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
            <div className="col-span-1 flex items-end">
              <div className="grid grid-cols-1 gap-[32px]">
                <h3 className={styles.h3 + " col-span-1 md:pb-[32px]"}>
                  You can also reach out via the following.
                </h3>
                <div className="col-span-1">
                  <label>Email</label>
                  <p>danolenter@gmail.com</p>
                </div>
                <div className="col-span-1">
                  <label>Address</label>
                  <p>45, Aiyetoro Street, Aguda, Surulere, Lagos.</p>
                </div>
                <div className="col-span-1">
                  <label>Social Media</label>
                  <div className="flex gap-3 mt-3">
                    <a>
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.4375"
                          y="0.4375"
                          width="59.125"
                          height="59.125"
                          rx="29.5625"
                          fill="white"
                        />
                        <path
                          d="M37.4006 31.4805L38.2547 25.8563H32.9117V22.2082C32.9117 20.6692 33.6567 19.1681 36.0498 19.1681H38.4805V14.38C38.4805 14.38 36.2755 14 34.1685 14C29.7661 14 26.8915 16.6943 26.8915 21.5698V25.8563H22V31.4805H26.8915V45.0773C27.8735 45.2331 28.8782 45.3129 29.9016 45.3129C30.925 45.3129 31.9297 45.2331 32.9117 45.0773V31.4805H37.4006Z"
                          fill="#878787"
                        />
                        <rect
                          x="0.4375"
                          y="0.4375"
                          width="59.125"
                          height="59.125"
                          rx="29.5625"
                          stroke="#878787"
                          stroke-width="0.875"
                        />
                      </svg>
                    </a>

                    <a>
                      <svg
                        width="64"
                        height="60"
                        viewBox="0 0 64 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.437823"
                          y="0.437823"
                          width="63.1244"
                          height="59.1244"
                          rx="29.5622"
                          fill="white"
                        />
                        <path
                          d="M43.1936 24.5915C43.2047 24.8442 43.2047 25.0854 43.2047 25.3381C43.2158 32.9992 37.5871 41.8434 27.2937 41.8434C24.2578 41.8434 21.2773 40.936 18.7178 39.2361C19.161 39.2935 19.6042 39.3165 20.0474 39.3165C22.5626 39.3165 25.0112 38.4435 26.9946 36.824C24.6013 36.7781 22.4961 35.1586 21.7648 32.7924C22.6069 32.9647 23.4711 32.9303 24.291 32.6891C21.6872 32.1607 19.8147 29.7831 19.8036 27.015C19.8036 26.992 19.8036 26.9691 19.8036 26.9461C20.5792 27.394 21.4545 27.6467 22.341 27.6697C19.8923 25.9698 19.1277 22.5814 20.6125 19.9282C23.46 23.5577 27.6483 25.7515 32.1468 25.9928C31.6925 23.9827 32.313 21.8693 33.7645 20.445C36.0137 18.2512 39.5594 18.3661 41.6867 20.6977C42.9388 20.445 44.1465 19.9626 45.2434 19.2849C44.8224 20.6288 43.9471 21.7659 42.7837 22.4895C43.8917 22.3517 44.9775 22.0416 45.9969 21.5821C45.2434 22.7537 44.2905 23.7645 43.1936 24.5915Z"
                          fill="#878787"
                        />
                        <rect
                          x="0.437823"
                          y="0.437823"
                          width="63.1244"
                          height="59.1244"
                          rx="29.5622"
                          stroke="#878787"
                          stroke-width="0.875647"
                        />
                      </svg>
                    </a>
                    <a>
                      <svg
                        width="64"
                        height="60"
                        viewBox="0 0 64 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.437823"
                          y="0.437823"
                          width="63.1244"
                          height="59.1244"
                          rx="29.5622"
                          fill="white"
                        />
                        <g clip-path="url(#clip0_126_1049)">
                          <path
                            d="M32.1377 20.1876C35.3805 20.1876 35.7612 20.202 37.0429 20.2599C38.2282 20.3129 38.8691 20.5104 39.2979 20.6791C39.8665 20.9007 40.2713 21.1609 40.6953 21.5849C41.1193 22.009 41.3843 22.4137 41.6012 22.9823C41.765 23.4111 41.9674 24.052 42.0204 25.2373C42.0782 26.519 42.0926 26.8997 42.0926 30.1425C42.0926 33.3853 42.0782 33.766 42.0204 35.0477C41.9674 36.233 41.7698 36.8739 41.6012 37.3027C41.3795 37.8713 41.1193 38.2761 40.6953 38.7001C40.2713 39.1241 39.8665 39.3891 39.2979 39.606C38.8691 39.7698 38.2282 39.9722 37.0429 40.0252C35.7612 40.083 35.3805 40.0974 32.1377 40.0974C28.8949 40.0974 28.5142 40.083 27.2325 40.0252C26.0472 39.9722 25.4063 39.7746 24.9775 39.606C24.4089 39.3843 24.0041 39.1241 23.5801 38.7001C23.1561 38.2761 22.8911 37.8713 22.6742 37.3027C22.5104 36.8739 22.308 36.233 22.255 35.0477C22.1972 33.766 22.1828 33.3853 22.1828 30.1425C22.1828 26.8997 22.1972 26.519 22.255 25.2373C22.308 24.052 22.5056 23.4111 22.6742 22.9823C22.8959 22.4137 23.1561 22.009 23.5801 21.5849C24.0041 21.1609 24.4089 20.8959 24.9775 20.6791C25.4063 20.5152 26.0472 20.3129 27.2325 20.2599C28.5142 20.1972 28.8997 20.1876 32.1377 20.1876ZM32.1377 18C28.8419 18 28.4275 18.0145 27.1313 18.0723C25.84 18.1301 24.9582 18.3373 24.1872 18.636C23.3874 18.9444 22.7128 19.3636 22.0382 20.0382C21.3636 20.7128 20.9492 21.3922 20.636 22.1872C20.3373 22.9582 20.1301 23.84 20.0723 25.1361C20.0145 26.4275 20 26.8419 20 30.1377C20 33.4335 20.0145 33.8479 20.0723 35.1441C20.1301 36.4354 20.3373 37.3172 20.636 38.093C20.9444 38.8928 21.3636 39.5674 22.0382 40.242C22.7128 40.9166 23.3922 41.331 24.1872 41.6442C24.9582 41.9429 25.84 42.1501 27.1361 42.2079C28.4323 42.2658 28.8419 42.2802 32.1425 42.2802C35.4432 42.2802 35.8527 42.2658 37.1489 42.2079C38.4403 42.1501 39.322 41.9429 40.0978 41.6442C40.8977 41.3358 41.5723 40.9166 42.2468 40.242C42.9214 39.5674 43.3358 38.888 43.649 38.093C43.9478 37.322 44.1549 36.4402 44.2128 35.1441C44.2706 33.8479 44.285 33.4383 44.285 30.1377C44.285 26.8371 44.2706 26.4275 44.2128 25.1313C44.1549 23.84 43.9478 22.9582 43.649 22.1824C43.3406 21.3826 42.9214 20.708 42.2468 20.0334C41.5723 19.3588 40.8928 18.9444 40.0978 18.6312C39.3268 18.3325 38.4451 18.1253 37.1489 18.0675C35.8479 18.0145 35.4335 18 32.1377 18Z"
                            fill="#878787"
                          />
                          <path
                            d="M32.1377 20.1876C35.3805 20.1876 35.7612 20.202 37.0429 20.2599C38.2282 20.3129 38.8691 20.5104 39.2979 20.6791C39.8665 20.9007 40.2713 21.1609 40.6953 21.5849C41.1193 22.009 41.3843 22.4137 41.6012 22.9823C41.765 23.4111 41.9674 24.052 42.0204 25.2373C42.0782 26.519 42.0926 26.8997 42.0926 30.1425C42.0926 33.3853 42.0782 33.766 42.0204 35.0477C41.9674 36.233 41.7698 36.8739 41.6012 37.3027C41.3795 37.8713 41.1193 38.2761 40.6953 38.7001C40.2713 39.1241 39.8665 39.3891 39.2979 39.606C38.8691 39.7698 38.2282 39.9722 37.0429 40.0252C35.7612 40.083 35.3805 40.0974 32.1377 40.0974C28.8949 40.0974 28.5142 40.083 27.2325 40.0252C26.0472 39.9722 25.4063 39.7746 24.9775 39.606C24.4089 39.3843 24.0041 39.1241 23.5801 38.7001C23.1561 38.2761 22.8911 37.8713 22.6742 37.3027C22.5104 36.8739 22.308 36.233 22.255 35.0477C22.1972 33.766 22.1828 33.3853 22.1828 30.1425C22.1828 26.8997 22.1972 26.519 22.255 25.2373C22.308 24.052 22.5056 23.4111 22.6742 22.9823C22.8959 22.4137 23.1561 22.009 23.5801 21.5849C24.0041 21.1609 24.4089 20.8959 24.9775 20.6791C25.4063 20.5152 26.0472 20.3129 27.2325 20.2599C28.5142 20.1972 28.8997 20.1876 32.1377 20.1876Z"
                            fill="#878787"
                          />
                          <path
                            d="M32.1379 23.9074C28.6975 23.9074 25.9028 26.6973 25.9028 30.1425C25.9028 33.5877 28.6927 36.3776 32.1379 36.3776C35.5831 36.3776 38.373 33.5877 38.373 30.1425C38.373 26.6973 35.5831 23.9074 32.1379 23.9074ZM32.1379 34.1852C29.9022 34.1852 28.0904 32.3734 28.0904 30.1377C28.0904 27.9019 29.9022 26.0902 32.1379 26.0902C34.3737 26.0902 36.1854 27.9019 36.1854 30.1377C36.1854 32.3734 34.3737 34.1852 32.1379 34.1852Z"
                            fill="white"
                          />
                          <path
                            d="M38.6187 25.112C39.4224 25.112 40.0739 24.4605 40.0739 23.6568C40.0739 22.8532 39.4224 22.2017 38.6187 22.2017C37.8151 22.2017 37.1636 22.8532 37.1636 23.6568C37.1636 24.4605 37.8151 25.112 38.6187 25.112Z"
                            fill="white"
                          />
                        </g>
                        <rect
                          x="0.437823"
                          y="0.437823"
                          width="63.1244"
                          height="59.1244"
                          rx="29.5622"
                          stroke="#878787"
                          stroke-width="0.875647"
                        />
                        <defs>
                          <clipPath id="clip0_126_1049">
                            <rect
                              width="24.2754"
                              height="24.2754"
                              fill="white"
                              transform="translate(20 18)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
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

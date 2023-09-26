import Link from "next/link";
import styles from "./footer.module.css";

import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="container-padding">
        <div className="bg-[#FF086F] relative text-white pt-8 my-4 overflow-hidden rounded-lg flex flex-col md:flex-row items-center justify-center">
          <div className="container-padding md:px-[80px] md:py-[40px] md:w-1/2">
            <h3 className="h3 text-center md:text-left my-5 max-w-4xl">
              Join us to gain access to world-class health professionals
            </h3>
            <p className="text-center  md:text-left  max-w-2xl md:text-xl">
              Search through our platform with a robust range of medical
              professionals
            </p>
            <div className="my-7 max-w-3xl md:flex">
              <Link href="login">
                <button className="button button-light w-full inverse-size-button mb-3 md:me-3">
                  Login
                </button>
              </Link>
              <Link href="doctors">
                <button className="button button-light-outline w-full  inverse-size-button md:ms-3">
                  Book a Doctor
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:h-full">
            <div className="mini-hero-image">
              <Image alt="infant" src="/images/infant--2.png" fill />
            </div>
          </div>
        </div>
      </div>
      <div className={"container-padding " + styles.footer}>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 mb-5 md:mb-0 ">
            <div className={"mb-3 md:mb-5 " + styles.title}>
              <Image
                className={styles.logo}
                alt="lily logo"
                src="/logo.svg"
                width={32.64}
                height={17.973}
              />
            </div>
            <p className={styles.description}>
              Search through our platform with a robust range of medical
              professionals
            </p>
          </div>
          <div className="col-span-12 md:col-span-3 md:flex md:justify-between mb-5 md:mb-0">
            <div className={styles.nav_link}>
              <div>
                <Link href="/">Home</Link>
              </div>
              <div>
                <Link href="/about-us">About Us</Link>
              </div>
              <div>
                <Link href="/services">Our Services</Link>
              </div>
              <div>
                <Link href="/gallery">Gallery</Link>
              </div>
            </div>

            <div className={styles.nav_link}>
              <div>
                <Link href="/doctors">Doctors</Link>
              </div>
              <div>
                <Link href="/resources">Resources</Link>
              </div>
              <div>
                <Link href="/support">Support</Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3 flex justify-start md:justify-end">
            <div className="flex gap-3">
              {/* <a>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="16" fill="white" />
                  <path
                    d="M19.5068 16.6656L19.9498 13.7487H17.1787V11.8567C17.1787 11.0585 17.5651 10.28 18.8063 10.28H20.0669V7.7967C20.0669 7.7967 18.9233 7.59961 17.8305 7.59961C15.5473 7.59961 14.0564 8.99696 14.0564 11.5256V13.7487H11.5195V16.6656H14.0564V23.7174C14.5658 23.7982 15.0868 23.8396 15.6176 23.8396C16.1484 23.8396 16.6694 23.7982 17.1787 23.7174V16.6656H19.5068Z"
                    fill="#FF086F"
                  />
                </svg>
              </a>
              <a>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="16" fill="white" />
                  <g clipPath="url(#clip0_87_1340)">
                    <path
                      d="M21.0859 13.3096C21.091 13.4279 21.091 13.5409 21.091 13.6593C21.0962 17.2477 18.4598 21.3903 13.6384 21.3903C12.2164 21.3903 10.8203 20.9653 9.62146 20.1691C9.82905 20.196 10.0366 20.2067 10.2442 20.2067C11.4223 20.2067 12.5693 19.7978 13.4983 19.0393C12.3773 19.0177 11.3912 18.2592 11.0487 17.1509C11.4431 17.2316 11.8479 17.2154 12.232 17.1025C11.0123 16.855 10.1353 15.7413 10.1301 14.4447C10.1301 14.434 10.1301 14.4232 10.1301 14.4125C10.4934 14.6223 10.9034 14.7406 11.3185 14.7514C10.1716 13.9552 9.81348 12.3681 10.5089 11.1253C11.8427 12.8254 13.8045 13.853 15.9116 13.9659C15.6988 13.0244 15.9894 12.0345 16.6693 11.3674C17.7228 10.3398 19.3836 10.3936 20.38 11.4858C20.9665 11.3674 21.5322 11.1414 22.046 10.824C21.8488 11.4535 21.4388 11.9861 20.8938 12.325C21.4128 12.2605 21.9214 12.1152 22.3989 11.9C22.046 12.4488 21.5997 12.9222 21.0859 13.3096Z"
                      fill="#FF086F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_87_1340">
                      <rect
                        width="13.4499"
                        height="13.4499"
                        fill="white"
                        transform="translate(9.28522 9.28516)"
                      />
                    </clipPath>
                  </defs>
                </svg>
  </a>*/}
              <a href="https://www.instagram.com/lilyhealth_/" target="_blank">
                {" "}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="16" fill="white" />
                  <g clipPath="url(#clip0_87_1342)">
                    <path
                      d="M16.0101 9.93665C17.8068 9.93665 18.0177 9.94466 18.7279 9.9767C19.3846 10.0061 19.7397 10.1155 19.9773 10.209C20.2923 10.3318 20.5166 10.4759 20.7515 10.7109C20.9864 10.9458 21.1333 11.1701 21.2534 11.4851C21.3442 11.7227 21.4563 12.0777 21.4857 12.7345C21.5177 13.4446 21.5257 13.6555 21.5257 15.4522C21.5257 17.249 21.5177 17.4599 21.4857 18.17C21.4563 18.8267 21.3469 19.1818 21.2534 19.4194C21.1306 19.7344 20.9864 19.9587 20.7515 20.1936C20.5166 20.4286 20.2923 20.5754 19.9773 20.6955C19.7397 20.7863 19.3846 20.8984 18.7279 20.9278C18.0177 20.9598 17.8068 20.9678 16.0101 20.9678C14.2134 20.9678 14.0025 20.9598 13.2924 20.9278C12.6356 20.8984 12.2806 20.789 12.043 20.6955C11.7279 20.5727 11.5037 20.4286 11.2687 20.1936C11.0338 19.9587 10.887 19.7344 10.7668 19.4194C10.6761 19.1818 10.5639 18.8267 10.5346 18.17C10.5025 17.4599 10.4945 17.249 10.4945 15.4522C10.4945 13.6555 10.5025 13.4446 10.5346 12.7345C10.5639 12.0777 10.6734 11.7227 10.7668 11.4851C10.8896 11.1701 11.0338 10.9458 11.2687 10.7109C11.5037 10.4759 11.7279 10.3291 12.043 10.209C12.2806 10.1182 12.6356 10.0061 13.2924 9.9767C14.0025 9.94199 14.2161 9.93665 16.0101 9.93665ZM16.0101 8.72461C14.1841 8.72461 13.9545 8.73262 13.2363 8.76465C12.5208 8.79669 12.0323 8.91149 11.6051 9.07701C11.162 9.24787 10.7882 9.48013 10.4144 9.85389C10.0407 10.2276 9.81109 10.6041 9.63756 11.0446C9.47204 11.4717 9.35724 11.9603 9.3252 12.6784C9.29317 13.3939 9.28516 13.6235 9.28516 15.4496C9.28516 17.2756 9.29317 17.5052 9.3252 18.2234C9.35724 18.9389 9.47204 19.4274 9.63756 19.8572C9.80842 20.3004 10.0407 20.6742 10.4144 21.0479C10.7882 21.4217 11.1646 21.6513 11.6051 21.8248C12.0323 21.9903 12.5208 22.1051 13.239 22.1372C13.9571 22.1692 14.1841 22.1772 16.0128 22.1772C17.8415 22.1772 18.0685 22.1692 18.7866 22.1372C19.5021 22.1051 19.9906 21.9903 20.4205 21.8248C20.8636 21.6539 21.2374 21.4217 21.6112 21.0479C21.9849 20.6742 22.2145 20.2977 22.388 19.8572C22.5536 19.4301 22.6684 18.9415 22.7004 18.2234C22.7324 17.5052 22.7404 17.2783 22.7404 15.4496C22.7404 13.6208 22.7324 13.3939 22.7004 12.6758C22.6684 11.9603 22.5536 11.4717 22.388 11.0419C22.2172 10.5987 21.9849 10.225 21.6112 9.85122C21.2374 9.47746 20.861 9.24787 20.4205 9.07434C19.9933 8.90882 19.5048 8.79402 18.7866 8.76199C18.0658 8.73262 17.8362 8.72461 16.0101 8.72461Z"
                      fill="#FF086F"
                    />
                    <path
                      d="M16.0101 9.93665C17.8068 9.93665 18.0177 9.94466 18.7279 9.9767C19.3846 10.0061 19.7397 10.1155 19.9773 10.209C20.2923 10.3318 20.5166 10.4759 20.7515 10.7109C20.9864 10.9458 21.1333 11.1701 21.2534 11.4851C21.3442 11.7227 21.4563 12.0777 21.4857 12.7345C21.5177 13.4446 21.5257 13.6555 21.5257 15.4522C21.5257 17.249 21.5177 17.4599 21.4857 18.17C21.4563 18.8267 21.3469 19.1818 21.2534 19.4194C21.1306 19.7344 20.9864 19.9587 20.7515 20.1936C20.5166 20.4286 20.2923 20.5754 19.9773 20.6955C19.7397 20.7863 19.3846 20.8984 18.7279 20.9278C18.0177 20.9598 17.8068 20.9678 16.0101 20.9678C14.2134 20.9678 14.0025 20.9598 13.2924 20.9278C12.6356 20.8984 12.2806 20.789 12.043 20.6955C11.7279 20.5727 11.5037 20.4286 11.2687 20.1936C11.0338 19.9587 10.887 19.7344 10.7668 19.4194C10.6761 19.1818 10.5639 18.8267 10.5346 18.17C10.5025 17.4599 10.4945 17.249 10.4945 15.4522C10.4945 13.6555 10.5025 13.4446 10.5346 12.7345C10.5639 12.0777 10.6734 11.7227 10.7668 11.4851C10.8896 11.1701 11.0338 10.9458 11.2687 10.7109C11.5037 10.4759 11.7279 10.3291 12.043 10.209C12.2806 10.1182 12.6356 10.0061 13.2924 9.9767C14.0025 9.94199 14.2161 9.93665 16.0101 9.93665Z"
                      fill="#FF086F"
                    />
                    <path
                      d="M16.0101 11.9976C14.104 11.9976 12.5555 13.5433 12.5555 15.4521C12.5555 17.361 14.1013 18.9067 16.0101 18.9067C17.919 18.9067 19.4647 17.361 19.4647 15.4521C19.4647 13.5433 17.919 11.9976 16.0101 11.9976ZM16.0101 17.692C14.7714 17.692 13.7676 16.6882 13.7676 15.4495C13.7676 14.2107 14.7714 13.2069 16.0101 13.2069C17.2489 13.2069 18.2527 14.2107 18.2527 15.4495C18.2527 16.6882 17.2489 17.692 16.0101 17.692Z"
                      fill="white"
                    />
                    <path
                      d="M19.6009 12.6652C20.0461 12.6652 20.4071 12.3043 20.4071 11.859C20.4071 11.4137 20.0461 11.0527 19.6009 11.0527C19.1556 11.0527 18.7946 11.4137 18.7946 11.859C18.7946 12.3043 19.1556 12.6652 19.6009 12.6652Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_87_1342">
                      <rect
                        width="13.4499"
                        height="13.4499"
                        fill="white"
                        transform="translate(9.28516 8.72461)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

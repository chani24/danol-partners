"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./topnav.module.css";
import { useContext, useEffect, useState } from "react";
//import gsap from "gsap";

export default function TopNav(props: {
  searchDropdown?: boolean;
  setSearchDropdown?: any;
}) {
  const [dropdown, setDropdown] = useState(false);



  const [nav, setNav] = useState(false);
  const openNav = () => {
    setNav(true);
   /* gsap.to("." + styles.dropdown_wrapper, {
      height: "100vh",
      duration: 0.5,
      ease: "power2.inOut",
    });*/
  };

  const closeNav = (delay: number = 0) => {
    setNav(false);
   /* gsap.to("." + styles.dropdown_wrapper, {
      height: 0,
      duration: 0.5,
      delay,
      ease: "power2.inOut",
    });*/
  };

  return (
    <div className="relative bg-#32041D">
      <div className={"container-padding " + styles.top_nav}>
         <Link href="/" className="text-#32041D md:text-2xl font-medium">
            <Image
              className={styles.logo}
              alt="danol logo"
              src="/images/logo.png"
              width={64.5}
              height={22.3}
            />
        </Link>
        <div className=" md:hidden">{nav ? (
            <svg
              onClick={() => closeNav()}
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="2.37972"
                height="29.7465"
                transform="translate(1.2832 1.75821) rotate(-45)"
                fill="#32041D"
              />
              <rect
                width="2.37972"
                height="29.7465"
                transform="translate(21.0339 0.20784) rotate(45)"
                fill="#32041D"
              />
            </svg>
          ) : (
            <svg
              onClick={openNav}
              width="24"
              height="11"
              viewBox="0 0 24 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="24"
                height="2"
                transform="translate(0 0.5)"
                fill="#32041D"
              />
              <rect
                width="24"
                height="2"
                transform="translate(0 4.5)"
                fill="#32041D"
              />
              <rect
                width="24"
                height="2"
                transform="translate(0 8.5)"
                fill="#32041D"
              />
            </svg>
        )}</div>
        <div className="hidden md:flex gap-[36px]">
          <Link className={styles.nav_link} href="about-us">About</Link>
          <Link className={styles.nav_link} href="services">Services</Link>
          <Link className={styles.nav_link} href="team">Team</Link>
          <Link className={styles.nav_link} href="blog">Blog</Link>
          <Link className={styles.nav_link} href="contact">Contact</Link>
        </div>
          
      </div>

      
      <div className={styles.dropdown_wrapper}>
        <div className={"container-padding " + styles.top_nav__dropdown}>
          <div className="md:hidden">
            <Link href="/login">Login</Link>
          </div>
          <div>
            <Link href="/about-us">About Us</Link>
          </div>
          <div>
            <Link href="/services">Our Services</Link>
          </div>
          <div>
            <Link href="/doctors">Doctors</Link>
          </div>
          <div>
            <Link href="/gallery">Gallery</Link>
          </div>
          <div>
            <Link href="/resource-center">Resources</Link>
          </div>
          <div>
            <Link href="/support">Support</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

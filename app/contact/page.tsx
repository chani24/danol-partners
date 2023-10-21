"use client";
import TopNav from "../_components/TopNav/TopNav";
import styles from "./page.module.css";
import Image from "next/image";

import { linstance } from "../_lib/api";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Contact() {
  const [buttonText, setButtonText] = useState("Submit");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values: any) => {
    setButtonText("Loading...");
    console.log("here");
    linstance
      .post("/api/contact", values)
      .then(() => {
        setButtonText("Submitted");
        reset();
        setTimeout(() => {
          setButtonText("Submit");
        }, 5000);
      })
      .catch(() => {
        setButtonText("Submit");
      });
  };

  return (
    <>
      <TopNav />
      <main>
        <section className={styles.hero_section}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[80px] gap-y-[40px]">
            <div className="col-span-1 md:mb-[80px]" data-aos="fade">
              <p className="primary-color mb-[8px] md:mb-[16px] text-2xl md:text-3xl">
                Contact Us
              </p>
              <h1>We would love to hear from you!</h1>
            </div>
            <div className="col-span-1 hidden md:block"></div>
            <div className="col-span-1">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-[16px]">
                  <div className="col-span-1">
                    <label>Full Name*</label>
                    <input
                      {...register("fullName", {
                        required: "Name is required",
                      })}
                    />
                    {errors.fullName && (
                      <span className="error-message">
                        {errors?.fullName?.message?.toString()}
                      </span>
                    )}
                  </div>
                  <div className="col-span-1">
                    <label>Email Address*</label>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                    {errors.email && (
                      <span className="error-message">
                        {errors?.email?.message?.toString()}
                      </span>
                    )}
                  </div>
                  <div className="col-span-1">
                    <label>Message*</label>
                    <textarea
                      {...register("message", {
                        required: "Message is required",
                      })}
                    />
                    {errors.message && (
                      <span className="error-message">
                        {errors?.message?.message?.toString()}
                      </span>
                    )}
                  </div>
                  <div className="col-span-1">
                    <button
                      type="submit"
                      className="button button-primary w-full"
                    >
                      {buttonText}
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

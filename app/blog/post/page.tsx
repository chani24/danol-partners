import ReadMore from "@/app/_components/Blog/ReadMore";
import TopNav from "@/app/_components/TopNav/TopNav";
import styles from "../page.module.css";
import Post from "@/app/_components/Blog/Post";

export default function BlopPost() {
  return (
    <>
      <TopNav />
      <main>
        <section className={styles.post_main}>
          <Post />
          <ReadMore />
        </section>

        <div
          style={{
            backgroundImage: "url(/images/employees-in-office-2.png)",
          }}
          className={
            styles.image_banner +
            " container-padding flex flex-col justify-end mt-[60px] md:mt-[100px]"
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

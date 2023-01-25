import { Inter } from "@next/font/google";
import Image from "next/image";
import StoryImg from ".././images/home1.jpg";
import styles from "./home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <div>
      <div className={styles.bgWrap}>
        <Image
          src={StoryImg}
          alt="our story"
          quality={100}
          placeholder="blur"
          sizes={"100vw"}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <h1 className={styles.bgHeader}>Begining a Story of Life</h1>
      <p className={styles.bgText}>
        How we became what we are today and how we are tilling the technology of
        tomorrow
      </p>
    </div>
  );
}

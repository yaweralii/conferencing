import { Inter } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";
import ConfImg from "@/app/images/con1.jpg";
import styles from "@/app/conference/conference.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className={styles.bgWrap}>
        <Image
          src={ConfImg}
          alt="conference pic"
          quality={100}
          placeholder="blur"
          sizes={"100vw"}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <h1 className={styles.bgHeader}>Welcome to conference</h1>
      <h2 className={styles.bgText}>
        <Link href="/conference/speakers" className={styles.bgLinks}>
          View Speakers
        </Link>
      </h2>
      <h2 className={styles.bgText}>
        <Link href="/conference/sessions" className={styles.bgLinks}>
          View Sessions
        </Link>
      </h2>
    </div>
  );
}

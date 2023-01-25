import { Inter } from "@next/font/google";
import Link from "next/link";
import styles from "./rootStyle.module.css";
import "./global.css";
const inter = Inter({ subsets: ["latin"], weight: ["900"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header>
          <h3>
            <Link href="/home" className={styles.homeLink}>
              ConfoMites
            </Link>
          </h3>
          <h3>
            <Link href="/blog" className={styles.menuBarLink}>
              Blog
            </Link>
          </h3>
          <h3>
            <Link href="/settings" className={styles.menuBarLink}>
              Settings
            </Link>
          </h3>
          <h3>
            <Link href="/conference" className={styles.menuBarLink}>
              Conference
            </Link>
          </h3>
        </header>
        {children}
      </body>
    </html>
  );
}

import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <div>
      <h1>session page</h1>
      <Link href="/conference">Back</Link>
    </div>
  );
}

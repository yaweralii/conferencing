import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <div>
      <h1>speakers page</h1>
      <Link href="/conference">back</Link>
    </div>
  );
}

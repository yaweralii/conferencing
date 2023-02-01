import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return <div className={inter.className}>Blog page</div>;
}

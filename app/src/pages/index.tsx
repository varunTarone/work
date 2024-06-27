import { FlipWords } from "@/components/ui/flip-words";
import { Inter } from "next/font/google";
import Image from 'next/image'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="flex flex-row justify-between items-center px-4 mt-[100px]">
      <div className="text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
      </div>
      <div className="text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
      <Image
        src="/favicon.ico"
        width={200}
        height={200}
        alt="Picture of the author"
        className="rounded-half"
      />
      </div>
    </div>
  );
}

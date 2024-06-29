import { FlipWords } from "@/components/ui/flip-words";
import { Inter as FontSans } from "next/font/google";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from 'next/image'
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Contacts from "@/components/Contacts";
import Projects from "@/components/Projects";
import { cn } from "@/utils/cn";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function Home() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
      <div className={cn("flex flex-col text-pretty justify-center items-center",fontSans)}>
        <Hero />
        <Projects />
        <Skills />
        <Contacts />
      </div>
  );
}

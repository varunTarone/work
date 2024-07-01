import { Inter as FontSans } from "next/font/google";
import Image from 'next/image'
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Contacts from "@/components/Contacts";
import Projects from "@/components/Projects";
import { cn } from "@/utils/cn";
import BlurFade from "@/components/ui/blur-fade";
import About from "@/components/About";
import {Particles} from "@/components/ui/particles";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function Home() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
      <div className={cn("flex flex-col mx-auto text-pretty justify-center w-[95vw] items-center",fontSans)}>
        <Particles
                quantity={400}
                className="absolute inset-0 -z-10 w-full h-full "
              />
          <Hero />
        <BlurFade duration={0.4} delay={0.4}>
          <About />
        </BlurFade>
        <BlurFade duration={0.6} delay={0.5}>
          <Projects />
        </BlurFade>
        <BlurFade duration={0.8} delay={0.6}>
          <Skills />
        </BlurFade>
        <BlurFade duration={1.0} delay={0.7}>
          <Contacts />
        </BlurFade>
      </div>
  );
}

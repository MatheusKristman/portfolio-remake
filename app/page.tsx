import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Projects } from "@/components/home/projects";
import { TransitionAnimation } from "@/components/global/transition-animation";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
}

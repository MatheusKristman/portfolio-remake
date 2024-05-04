import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Projects } from "@/components/home/projects";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
}

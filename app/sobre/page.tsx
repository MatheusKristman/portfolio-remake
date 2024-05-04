import { AboutMe } from "@/components/about/about-me";
import { Illustration } from "@/components/about/illustration";
import { Skills } from "@/components/about/skills";
import { Details } from "@/components/about/details";
import { Hobbies } from "@/components/about/hobbies";

function AboutPage() {
  return (
    <>
      <div className="w-full mt-[100px] mb-[200px]">
        <AboutMe />
        <Illustration />
        <Skills />
        <Details />
        <Hobbies />
      </div>
    </>
  );
}

export default AboutPage;

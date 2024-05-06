import { ProjectCard } from "@/components/portfolio/project-card";
import { projects } from "@/constants/projects";

function PortfolioPage() {
  return (
    <section className="w-full min-h-screen animate-show px-6 sm:px-16 pt-[100px] mb-[200px] lg:container lg:mx-auto">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:max-w-4xl lg:mx-auto font-bold text-primary text-center !leading-snug mb-[100px]">
        Uma Jornada Através das Minhas Contribuições no Desenvolvimento.
      </h1>

      <div className="w-full flex flex-col gap-[200px]">
        {projects.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </section>
  );
}

export default PortfolioPage;

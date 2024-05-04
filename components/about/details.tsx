import Image from "next/image";
import { Dot } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { aboutTechs } from "@/constants/about-techs";
import { experiences } from "@/constants/about-experiences";
import { courses } from "@/constants/about-courses";

interface CardProps {
  title: string;
  period: string;
  role: string;
}

function Card({ title, period, role }: CardProps) {
  return (
    <div className="w-full flex flex-col gap-1">
      <span className="text-xl font-bold text-primary">{title}</span>

      <div className="w-full flex">
        <span className="text-xl font-light text-primary opacity-70">
          {period}
        </span>

        <Dot size={30} className="text-primary opacity-70" />

        <span className="text-xl font-light text-primary opacity-70">
          {role}
        </span>
      </div>
    </div>
  );
}

export function Details() {
  return (
    <section className="w-full px-6 sm:px-16 pt-[200px] flex flex-col gap-y-24 lg:container lg:mx-auto lg:grid lg:grid-cols-3 lg:gap-x-6">
      <div className="w-full flex flex-col gap-12">
        <h5 className="text-3xl text-primary font-bold">
          Tecnologias que domino
        </h5>

        <div className="w-full flex flex-wrap gap-x-6 gap-y-9">
          {aboutTechs.map(({ lightImageUrl, darkImageUrl, content }) => (
            <TooltipProvider delayDuration={100} key={content}>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src={lightImageUrl}
                    alt={content}
                    width={30}
                    height={30}
                    className="block w-[30px] h-[30px] dark:hidden"
                  />

                  <Image
                    src={darkImageUrl}
                    alt={content}
                    width={30}
                    height={30}
                    className="hidden w-[30px] h-[30px] dark:block"
                  />
                </TooltipTrigger>

                <TooltipContent
                  side="bottom"
                  className="bg-primary rounded-full text-background"
                >
                  <p>{content}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-12">
        <h5 className="text-3xl font-bold text-primary">Experiencias</h5>

        <div className="w-full flex flex-col gap-9">
          {experiences.map((experience) => (
            <Card {...experience} key={experience.title} />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-12">
        <h5 className="text-3xl font-bold text-primary">Cursos e Ensino</h5>

        <div className="w-full flex flex-col gap-9">
          {courses.map((course) => (
            <Card {...course} key={course.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

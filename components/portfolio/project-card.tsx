import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  projectName: string;
  techs: {
    lightImageUrl: string;
    darkImageUrl: string;
    content: string;
  }[];
  service: string;
  githubLink: string;
  projectLink: string;
  projectImageUrl: string;
  projectDesc: string;
}

export function ProjectCard({
  projectName,
  techs,
  service,
  githubLink,
  projectLink,
  projectImageUrl,
  projectDesc,
}: Props) {
  return (
    <div className="w-full flex flex-col gap-12">
      <div className="w-full flex items-end justify-between pb-6 border-b border-primary">
        <div className="w-fit flex flex-col gap-1">
          <span className="w-fit text-sm text-primary font-light">2024</span>
          <span className="w-fit text-base sm:text-2xl text-primary font-light">
            {projectName}
          </span>
        </div>

        <div className="w-fit hidden lg:flex flex-col justify-between gap-1">
          <span className="text-sm text-primary font-light">Tecnologias</span>

          <div className="w-fit flex items-center gap-2">
            {techs.length > 0 &&
              techs.map(({ lightImageUrl, darkImageUrl, content }) => (
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

        <div className="w-fit hidden lg:flex flex-col justify-between gap-1">
          <span className="text-sm text-primary font-light">Serviço</span>

          <span className="text-base sm:text-xl text-primary font-light">
            {service}
          </span>
        </div>

        <div className="w-fit flex items-center justify-end gap-4">
          <Button asChild variant="link" size="icon">
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer noopenner"
              className="relative !p-0 w-[35px] sm:w-[45px] h-[35px] sm:h-[45px] flex items-center justify-center bg-github-light dark:bg-github-dark transition-opacity hover:opacity-90 bg-no-repeat bg-center bg-[length:89%_87%] sm:bg-[length:90%_90%]"
            >
              <span className="sr-only">GitHub Projeto</span>
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-fit h-[32px] sm:h-[45px] flex items-center gap-1 text-base sm:text-2xl font-light py-2 group"
          >
            <a href={projectLink} target="_blank" rel="noreferrer noopenner">
              Ver Projeto
              <ArrowUpRight
                strokeWidth={1.5}
                className="opacity-70 transition-all group-hover:opacity-100 group-hover:rotate-45"
              />
            </a>
          </Button>
        </div>
      </div>

      <div className="w-full flex flex-col gap-12">
        <div className="w-full flex flex-col gap-6 lg:flex-row-reverse lg:items-end">
          <div className="w-full lg:w-[60%] h-[220px] sm:h-auto sm:aspect-video rounded-2xl overflow-hidden relative shadow-md">
            <Image
              src={projectImageUrl}
              alt={projectName}
              fill
              className="object-cover object-top"
            />
          </div>

          <div className="w-full flex justify-between gap-6 lg:hidden">
            <div className="w-fit flex flex-col justify-between">
              <span className="text-sm text-primary font-light">
                Tecnologias
              </span>

              <div className="w-fit flex items-center gap-2">
                {techs.length > 0 &&
                  techs.map(({ lightImageUrl, darkImageUrl, content }) => (
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

            <div className="w-fit flex flex-col justify-between">
              <span className="text-sm text-primary font-light">Serviço</span>

              <span className="text-base sm:text-xl text-primary font-light">
                {service}
              </span>
            </div>
          </div>

          <p className="text-base sm:text-xl text-primary font-light opacity-70 lg:w-[40%]">
            {projectDesc}
          </p>
        </div>
      </div>
    </div>
  );
}

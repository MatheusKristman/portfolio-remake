"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, stagger } from "framer-motion";

import {
  projectResumeInfosAnimation,
  projectsResumeIllustrationAnimation,
  staggerAnimation,
} from "@/constants/framer-motion/global-animations";
import { useEffect, useState } from "react";
import { homeProjects } from "@/constants/home-projects";

interface ProjectCardProps {
  imageUrl: string;
  projectName: string;
  techs: string;
}

function ProjectCard({ imageUrl, projectName, techs }: ProjectCardProps) {
  return (
    <motion.div
      key={projectName}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={projectsResumeIllustrationAnimation}
      className="project-resume-illustration w-full flex flex-col gap-6 lg:items-end"
    >
      <div className="relative w-full h-60 sm:h-[350px] rounded-2xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={projectName}
          fill
          className="object-top object-cover"
        />
      </div>

      <div className="w-fit flex flex-col gap-1 lg:items-end">
        <span className="text-2xl text-primary font-bold">{projectName}</span>

        <span className="text-text-2xl text-primary font-light lg:text-right">
          {techs}
        </span>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [projectShowing, setProjectShowing] = useState<number>(0);

  useEffect(() => {
    const timeout = setInterval(() => {
      if (projectShowing === 2) {
        setProjectShowing(0);
        return;
      }

      setProjectShowing(projectShowing + 1);
    }, 10000);

    return () => {
      clearTimeout(timeout);
    };
  }, [projectShowing]);

  useEffect(() => {
    console.log(projectShowing);
  }, [projectShowing]);

  return (
    <section className="w-full px-6 sm:px-16 pt-[100px] flex flex-col gap-12 lg:container lg:mx-auto lg:flex-row-reverse mb-[100px]">
      <AnimatePresence mode="wait">
        {projectShowing === 0 && (
          <ProjectCard
            key={projectShowing}
            imageUrl={homeProjects[0].imageUrl}
            projectName={homeProjects[0].projectName}
            techs={homeProjects[0].techs}
          />
        )}

        {projectShowing === 1 && (
          <ProjectCard
            key={projectShowing}
            imageUrl={homeProjects[1].imageUrl}
            projectName={homeProjects[1].projectName}
            techs={homeProjects[1].techs}
          />
        )}

        {projectShowing === 2 && (
          <ProjectCard
            key={projectShowing}
            imageUrl={homeProjects[2].imageUrl}
            projectName={homeProjects[2].projectName}
            techs={homeProjects[2].techs}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerAnimation}
        className="w-full flex flex-col gap-9"
      >
        <motion.h2
          variants={projectResumeInfosAnimation}
          className="project-resume-info text-3xl sm:text-4xl font-bold text-primary !leading-snug max-w-lg"
        >
          Projetos que Demonstram Minhas Habilidades.
        </motion.h2>

        <motion.div
          variants={staggerAnimation}
          className="w-full flex flex-col gap-4 pl-16 relative before:content-[''] before:w-14 before:h-[1px] before:bg-primary before:absolute before:left-0 before:top-4 before:opacity-70"
        >
          <motion.p
            variants={projectResumeInfosAnimation}
            className="project-resume-info text-2xl text-primary font-light !leading-snug opacity-70"
          >
            Dê uma olhada nos meus projetos mais significativos, cada um
            contando uma história única sobre meu crescimento profissional e
            minhas conquistas como desenvolvedor.
          </motion.p>

          <motion.div
            variants={projectResumeInfosAnimation}
            className="project-resume-info"
          >
            <Link
              href="/portfolio"
              className="w-fit flex items-center gap-1 text-2xl text-primary font-light group"
            >
              Explorar
              <ArrowUpRight
                strokeWidth={1.5}
                className="transition-all group-hover:rotate-45"
              />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { TechTooltip } from "./hero/tech-tooltip";
import { heroTechs } from "@/constants/hero-techs";
import {
  fromLeftFromRight,
  heroDescription,
  heroIllustrationDesktop,
  heroLink,
  staggerAnimation,
} from "@/constants/framer-motion/global-animations";

export function Hero() {
  console.log("hero server");

  return (
    <main className="w-full px-6 sm:px-16 lg:container lg:mx-auto pt-[50px] pb-[200px] sm:pt-[75px]">
      <div className="w-full relative">
        <div className="relative flex flex-col gap-6 lg:pt-[50px]">
          <div className="flex flex-col gap-4 max-w-xl">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerAnimation}
              className="flex flex-col"
            >
              <motion.p
                variants={fromLeftFromRight}
                className="text-2xl font-light text-primary mb-2 opacity-70 sm:text-4xl"
              >
                Olá, meu nome é
              </motion.p>

              <motion.h1
                variants={fromLeftFromRight}
                className="text-5xl font-bold text-primary sm:text-8xl lg:text-9xl"
              >
                Matheus Kristman
              </motion.h1>
            </motion.div>

            <motion.p
              initial="initial"
              animate="animate"
              variants={heroDescription}
              className="text-2xl font-light text-primary opacity-70 !leading-snug sm:text-3xl"
            >
              Do front-end ao back-end, estou preparado para enfrentar qualquer
              desafio com entusiasmo e determinação, sempre visando a
              excelência.
            </motion.p>
          </div>

          <motion.div initial="initial" animate="animate" variants={heroLink}>
            <Link
              href="/portfolio"
              className="text-xl font-light text-primary flex items-center gap-1 sm:text-3xl group"
            >
              Explore meu portfólio
              <ArrowUpRight
                strokeWidth={1.5}
                className="transition-all group-hover:rotate-45"
              />
            </Link>
          </motion.div>

          <div className="absolute top-[calc(100%+36px)] left-0 sm:left-auto sm:-right-10">
            <Image
              src="/assets/images/dev-fullstack-mobile-light.svg"
              alt="Desenvolvedor Fullstack"
              width={330}
              height={84}
              className="sm:hidden dark:hidden sm:dark:hidden"
            />

            <Image
              src="/assets/images/dev-fullstack-mobile-dark.svg"
              alt="Desenvolvedor Fullstack"
              width={330}
              height={84}
              className="hidden dark:block sm:dark:hidden sm:hidden"
            />

            <Image
              src="/assets/images/dev-fullstack-mobile-light.svg"
              alt="Desenvolvedor Fullstack"
              width={411}
              height={98}
              className="hidden sm:block lg:hidden sm:dark:hidden"
            />

            <Image
              src="/assets/images/dev-fullstack-mobile-dark.svg"
              alt="Desenvolvedor Fullstack"
              width={411}
              height={98}
              className="hidden sm:dark:block lg:dark:hidden lg:hidden"
            />
          </div>
        </div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={heroIllustrationDesktop}
          className="absolute top-0 right-0 flex flex-col items-end gap-16"
        >
          <Image
            src="/assets/images/dev-fullstack-desktop-light.png"
            alt="Desenvolvedor Fullstack"
            width={98}
            height={411}
            className="hidden lg:block lg:dark:hidden"
          />

          <Image
            src="/assets/images/dev-fullstack-desktop-dark.png"
            alt="Desenvolvedor Fullstack"
            width={98}
            height={411}
            className="hidden lg:dark:block"
          />

          <div className="flex flex-col items-center gap-6 pr-3">
            {heroTechs.map(({ lightImageUrl, darkImageUrl, content }) => (
              <TechTooltip
                key={content}
                lightImageUrl={lightImageUrl}
                darkImageUrl={darkImageUrl}
                content={content}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import useMobileMenuStore from "@/stores/mobile-menu-store";
import {
  Line1Animation,
  Line2Animation,
  Line3Animation,
  NavAnimation,
} from "@/constants/framer-motion/mobile-menu-animation";

export function MobileMenu() {
  const { isMenuOpen } = useMobileMenuStore();
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.nav
          initial="initial"
          animate="animate"
          exit="exit"
          variants={NavAnimation}
          className={cn(
            "fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-secondary px-6 sm:px-16 z-10"
          )}
        >
          <ul className="w-full flex flex-col items-end gap-12 mt-40">
            <li className="flex items-center gap-2">
              <Link
                href="/portfolio"
                className="text-3xl font-bold text-primary uppercase"
              >
                Portfólio
              </Link>

              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={Line1Animation}
                className={cn("h-[1px] bg-primary", {
                  "w-20": pathname === "/portfolio",
                })}
              />
            </li>

            <li className="flex items-center gap-2">
              <Link
                href="/sobre"
                className="text-3xl font-bold text-primary uppercase"
              >
                Sobre
              </Link>

              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={Line2Animation}
                className={cn("h-[1px] bg-primary", {
                  "w-20": pathname === "/portfolio",
                })}
              />
            </li>

            <li className="flex items-center gap-2">
              <Link
                href="/contato"
                className="text-3xl font-bold text-primary uppercase"
              >
                Contato
              </Link>

              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={Line3Animation}
                className={cn("h-[1px] bg-primary", {
                  "w-20": pathname === "/portfolio",
                })}
              />
            </li>
          </ul>

          <div className="fixed left-0 right-0 px-6 bottom-12 w-full flex flex-col gap-6 sm:px-16">
            <div className="w-full flex items-center justify-around">
              <a
                href="https://www.linkedin.com/in/matheus-kristman/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="/assets/icons/linkedin-dark.svg"
                  alt="Linkedin"
                  width={35}
                  height={35}
                  className="hidden dark:block"
                />

                <Image
                  src="/assets/icons/linkedin-light.svg"
                  alt="Linkedin"
                  width={35}
                  height={35}
                  className="block dark:hidden"
                />
              </a>

              <a
                href="https://www.instagram.com/tinzin.exe/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="/assets/icons/instagram-dark.svg"
                  alt="Instagram"
                  width={35}
                  height={35}
                  className="hidden dark:block"
                />

                <Image
                  src="/assets/icons/instagram-light.svg"
                  alt="Instagram"
                  width={35}
                  height={35}
                  className="block dark:hidden"
                />
              </a>

              <a
                href="https://github.com/MatheusKristman"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="/assets/icons/github-dark.svg"
                  alt="GitHub"
                  width={35}
                  height={35}
                  className="hidden dark:block"
                />

                <Image
                  src="/assets/icons/github-light.svg"
                  alt="GitHub"
                  width={35}
                  height={35}
                  className="block dark:hidden"
                />
              </a>
            </div>

            <a
              href="mailto:matheuskristman.dev@gmail.com"
              className="text-lg font-light text-primary text-center"
            >
              matheuskristman.dev@gmail.com
            </a>

            <a
              href="https://wa.me/5511910041998"
              className="text-lg font-light text-primary text-center"
            >
              (11) 91004-1998
            </a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

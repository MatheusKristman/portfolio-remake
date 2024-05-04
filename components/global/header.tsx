"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { ModeToggle } from "@/components/global/mode-toggle";
import { MobileMenuButton } from "./mobile-menu-button";
import { MobileMenu } from "./mobile-menu";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <>
      <header className="w-full px-6 pt-6 relative z-20 sm:px-16 sm:pt-9 lg:container lg:mx-auto">
        <div className="w-full flex items-center justify-between gap-12">
          <Link href="/">
            <Image
              src="/assets/images/logo-light.svg"
              alt="Logo MKDev"
              width={80}
              height={33}
              className="block lg:hidden dark:hidden"
            />

            <Image
              src="/assets/images/logo-light.svg"
              alt="Logo MKDev"
              width={110}
              height={45}
              className="hidden lg:block lg:dark:hidden"
            />

            <Image
              src="/assets/images/logo-dark.svg"
              alt="Logo MKDev"
              width={80}
              height={33}
              className="hidden lg:hidden lg:dark:hidden dark:block"
            />

            <Image
              src="/assets/images/logo-dark.svg"
              alt="Logo MKDev"
              width={110}
              height={45}
              className="hidden lg:hidden lg:dark:block"
            />
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex items-center justify-center gap-12">
              <li className="w-fit relative group">
                <Link
                  href="/portfolio"
                  className="text-lg font-bold text-primary"
                >
                  Portfólio
                </Link>

                <div
                  className={cn(
                    "h-[2px] bg-secondary absolute bottom-0 w-0 transform right-0 left-auto transition-all group-hover:left-0 group-hover:right-auto group-hover:w-full",
                    {
                      "w-full": pathname === "/portfolio",
                    }
                  )}
                />
              </li>

              <li className="w-fit relative group">
                <Link href="/sobre" className="text-lg font-bold text-primary">
                  Sobre
                </Link>

                <div
                  className={cn(
                    "h-[2px] bg-secondary absolute bottom-0 w-0 transform right-0 left-auto transition-all group-hover:left-0 group-hover:right-auto group-hover:w-full",
                    {
                      "w-full": pathname === "/sobre",
                    }
                  )}
                />
              </li>

              <li className="w-fit relative group">
                <Link
                  href="/contato"
                  className="text-lg font-bold text-primary"
                >
                  Contato
                </Link>

                <div
                  className={cn(
                    "h-[2px] bg-secondary absolute bottom-0 w-0 transform right-0 left-auto transition-all group-hover:left-0 group-hover:right-auto group-hover:w-full",
                    {
                      "w-full": pathname === "/contato",
                    }
                  )}
                />
              </li>
            </ul>
          </nav>

          <div className="w-fit flex items-center gap-6">
            <ModeToggle />

            <MobileMenuButton />
          </div>
        </div>
      </header>

      <MobileMenu />
    </>
  );
}

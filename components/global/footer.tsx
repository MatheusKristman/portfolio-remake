import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full px-6 sm:px-16 flex flex-col gap-12 sm:gap-20">
      <div className="w-full flex flex-col items-center gap-9 sm:flex-row sm:justify-between">
        <Link href="/">
          <Image
            src="/assets/images/logo-light.svg"
            alt="Logo MKDev"
            width={110}
            height={45}
            className="block dark:hidden"
          />

          <Image
            src="/assets/images/logo-dark.svg"
            alt="Logo MKDev"
            width={110}
            height={45}
            className="hidden dark:block"
          />
        </Link>

        <Link
          href="/contato"
          className="w-fit text-primary text-2xl sm:text-3xl font-light flex items-center gap-1 group"
        >
          Entre em contato
          <ArrowUpRight
            strokeWidth={1.5}
            className="transition-all group-hover:rotate-45"
          />
        </Link>
      </div>

      <div className="w-full flex flex-col gap-9 py-6 border-t-2 border-[#323330]/15 sm:flex-row sm:items-end sm:justify-between">
        <div className="w-full flex flex-col items-center gap-2 sm:w-fit sm:items-start">
          <span className="text-base text-primary font-bold opacity-70">
            Contatos
          </span>

          <div className="w-full flex flex-col items-center gap-6 sm:w-fit sm:items-start lg:flex-row lg:gap-x-9">
            <div className="w-full flex flex-col items-center gap-2 sm:w-fit sm:items-start">
              <a
                href="mailto:matheuskristman.dev@gmail.com"
                className="text-base text-primary font-light opacity-70"
              >
                matheuskristman.dev@gmail.com
              </a>

              <a
                href="https://wa.me/5511910041998"
                className="text-base text-primary font-light opacity-70"
              >
                (11) 91004-1998
              </a>
            </div>

            <div className="w-full flex flex-col items-center gap-2 sm:w-fit sm:items-start lg:flex-row lg:flex-wrap lg:w-40 lg:gap-x-9">
              <Link
                href="/portfolio"
                className="text-base text-primary font-light opacity-70"
              >
                Portfólio
              </Link>

              <Link
                href="/sobre"
                className="text-base text-primary font-light opacity-70"
              >
                Sobre
              </Link>

              <Link
                href="/contato"
                className="text-base text-primary font-light opacity-70"
              >
                Contato
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-2 sm:w-fit sm:items-end">
          <div className="w-full flex items-center justify-center gap-12 sm:w-fit sm:justify-end">
            <a
              href="https://www.linkedin.com/in/matheus-kristman/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src="/assets/icons/linkedin-dark.svg"
                alt="Linkedin"
                width={30}
                height={30}
                className="hidden dark:block opacity-70 transition lg:hover:opacity-100"
              />

              <Image
                src="/assets/icons/linkedin-light.svg"
                alt="Linkedin"
                width={30}
                height={30}
                className="block dark:hidden opacity-70 transition lg:hover:opacity-100"
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
                width={30}
                height={30}
                className="hidden dark:block opacity-70 transition lg:hover:opacity-100"
              />

              <Image
                src="/assets/icons/instagram-light.svg"
                alt="Instagram"
                width={30}
                height={30}
                className="block dark:hidden opacity-70 transition lg:hover:opacity-100"
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
                width={30}
                height={30}
                className="hidden dark:block opacity-70 transition lg:hover:opacity-100"
              />

              <Image
                src="/assets/icons/github-light.svg"
                alt="GitHub"
                width={30}
                height={30}
                className="block dark:hidden opacity-70 transition lg:hover:opacity-100"
              />
            </a>
          </div>

          <span className="text-base text-center text-primary font-light opacity-70">
            © 2024 — Matheus Kristman{" "}
          </span>
        </div>
      </div>
    </footer>
  );
}

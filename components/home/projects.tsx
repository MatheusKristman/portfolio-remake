import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Projects() {
  return (
    <section className="w-full px-6 sm:px-16 pt-[100px] flex flex-col gap-12 lg:container lg:mx-auto lg:flex-row-reverse mb-[100px]">
      <div className="w-full flex flex-col gap-6 lg:items-end">
        <div className="relative w-full h-60 sm:h-[350px] rounded-2xl overflow-hidden">
          <Image
            src="/assets/images/chattie.png"
            alt="Chattie"
            fill
            className="object-top object-cover"
          />
        </div>

        <div className="w-fit flex flex-col gap-1 lg:items-end">
          <span className="text-2xl text-primary font-bold">Chattie</span>

          <span className="text-text-2xl text-primary font-light lg:text-right">
            Next.js & Pusher
          </span>
        </div>
      </div>

      <div className="w-full flex flex-col gap-9">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary !leading-snug max-w-lg">
          Projetos que Demonstram Minhas Habilidades.
        </h2>

        <div className="w-full flex flex-col gap-4 pl-16 relative before:content-[''] before:w-14 before:h-[1px] before:bg-primary before:absolute before:left-0 before:top-4 before:opacity-70">
          <p className="text-2xl text-primary font-light !leading-snug opacity-70">
            Dê uma olhada nos meus projetos mais significativos, cada um
            contando uma história única sobre meu crescimento profissional e
            minhas conquistas como desenvolvedor.
          </p>

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
        </div>
      </div>
    </section>
  );
}

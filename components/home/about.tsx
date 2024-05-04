import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function About() {
  return (
    <section className="w-full px-6 sm:px-16 lg:container lg:mx-auto lg:pt-[200px]">
      <div className="w-full flex flex-col items-center justify-center gap-6 sm:gap-9">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center">
          O desenvolvedor por trás do código.
        </h2>

        <div className="w-full flex flex-col items-center gap-4 sm:gap-6 lg:max-w-4xl">
          <p className="text-xl sm:text-2xl font-light text-center text-primary !leading-snug opacity-70">
            Sou um desenvolvedor apaixonado que começou sua jornada focado em
            front-end e UI/UX. Ao longo do caminho, percebi a importância de
            entender o desenvolvimento back-end para me tornar um desenvolvedor
            completo. Com dois anos de experiência como freelancer, estou sempre
            em busca de novos desafios e oportunidades para crescer
            profissionalmente.
          </p>

          <Link
            href="/sobre"
            className="w-fit flex items-center gap-1 text-xl sm:text-2xl font-light text-primary group"
          >
            Descubra mais sobre mim
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

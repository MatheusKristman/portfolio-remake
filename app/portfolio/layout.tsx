import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Matheus Kristman, Dev Web FullStack, UI/UX Designer",
  description:
    "Transformando ideias em experiências digitais excepcionais. Combinando habilidades de desenvolvimento front-end e back-end com um olhar apurado para design, crio soluções completas que são visualmente atraentes e altamente funcionais.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

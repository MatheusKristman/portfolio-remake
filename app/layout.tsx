import type { Metadata } from "next";
import { Libre_Franklin as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Glows } from "@/components/global/glows";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Matheus Kristman, Dev Web FullStack, UI/UX Designer",
  description:
    "Transformando ideias em experiências digitais excepcionais. Combinando habilidades de desenvolvimento front-end e back-end com um olhar apurado para design, crio soluções completas que são visualmente atraentes e altamente funcionais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          "min-h-screen w-full overflow-x-hidden bg-background font-sans antialiased relative",
          fontSans.variable
        )}
      >
        <div className="w-full min-h-screen bg-grainy relative z-10">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </div>

        <Glows />
        <Toaster />
      </body>
    </html>
  );
}

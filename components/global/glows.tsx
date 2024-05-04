"use client";

import { usePathname } from "next/navigation";

export function Glows() {
  const pathname = usePathname();

  return (
    <>
      {/* Home glows */}
      {pathname === "/" && (
        <div className="absolute bg-[#3BD776] w-[410px] h-[410px] z-0 rounded-full top-[340px] blur-[100px] sm:right-0 sm:top-[555px] sm:blur-[150px] lg:top-[450px] lg:right-[150px]" />
      )}
      {pathname === "/" && (
        <div className="absolute bg-[#2670DF]/70 w-[410px] h-[410px] z-0 rounded-full bottom-[1000px] -left-[120px] blur-[200px] sm:bottom-[700px] lg:bottom-[400px] lg:-left-[50px]" />
      )}

      {/* Portfolio glows */}
      {pathname === "/portfolio" && (
        <div className="absolute bg-[#3BD776] w-[232px] h-[224px] z-0 rounded-full top-[182px] -right-[50px] blur-[100px] sm:w-[365px] sm:h-[252px] sm:top-[192px] sm:blur-[150px] lg:w-[797px] lg:h-[339px] lg:top-[320px] lg:-right-[68px] lg:blur-[250px]" />
      )}
      {pathname === "/portfolio" && (
        <div className="absolute bg-[#2670DF]/70 w-[276px] h-[206px] z-0 rounded-full top-[105px] -left-[57px] blur-[100px] sm:left-0 sm:w-[435px] sm:h-[232px] sm:blur-[150px] lg:w-[797px] lg:h-[339px] lg:top-[233px] lg:-left-[45px] lg:blur-[200px]" />
      )}

      {/* Sobre glows */}
      {pathname === "/sobre" && (
        <div className="absolute bg-[#3BD776] w-[270px] h-[436px] z-0 rounded-full top-[370px] -right-[72px] blur-[150px] sm:w-[269px] sm:h-[864px] sm:top-[304px] sm:right-0 sm:blur-[250px] lg:w-[778px] lg:h-[490px] lg:top-[230px] lg:-right-[68px] lg:blur-[250px]" />
      )}
      {pathname === "/sobre" && (
        <div className="absolute bg-[#2670DF]/70 w-[242px] h-[878px] z-0 rounded-full top-[1900px] -left-[57px] blur-[150px] sm:-left-[57px] sm:top-[1700px] sm:w-[487px] sm:h-[742px] sm:blur-[150px] lg:w-[778px] lg:h-[396px] lg:top-[1500px] lg:-left-[72px] lg:blur-[200px]" />
      )}

      {/* Contato glows */}
      {pathname === "/contato" && (
        <div className="absolute bg-[#3BD776] w-[286px] h-[374px] z-0 rounded-full top-[72px] -right-[107px] blur-[150px] sm:w-[365px] sm:h-[274px] sm:top-[163px] sm:right-6 sm:blur-[200px] lg:w-[710px] lg:h-[300px] lg:top-[155px] lg:-right-0 lg:blur-[250px]" />
      )}
      {pathname === "/contato" && (
        <div className="absolute bg-[#2670DF]/70 w-[251px] h-[380px] z-0 rounded-full top-[84px] -left-[97px] blur-[150px] sm:-left-9 sm:top-[172px] sm:w-[322px] sm:h-[247px] sm:blur-[125px] lg:w-[690px] lg:h-[315px] lg:top-[155px] lg:-left-[72px] lg:blur-[200px]" />
      )}
    </>
  );
}

export function Skills() {
  return (
    <section className="w-full px-6 sm:px-16 pt-[200px] flex flex-col gap-12 lg:container lg:mx-auto">
      <h3 className="text-3xl sm:text-4xl font-bold text-center text-primary">
        Competências.
      </h3>

      <div className="w-full grid grid-cols-1 gird-rows-3 sm:grid-cols-[auto_auto] sm:grid-rows-[auto_auto] lg:grid-cols-[auto_auto_auto] lg:grid-rows-[auto] gap-y-9 gap-x-5 lg:gap-x-9">
        <div className="w-full h-fit flex flex-col gap-4">
          <h5 className="w-fit text-3xl font-bold text-primary">
            Comunicação e Coordenação de Equipes
          </h5>

          <p className="w-fit text-2xl text-primary font-light opacity-70">
            Experiência em liderar equipes em projetos freelancers,
            desenvolvendo habilidades de comunicação efetiva e coordenação.
          </p>
        </div>

        <div className="w-full h-fit flex flex-col gap-4">
          <h5 className="w-fit text-3xl font-bold text-primary">
            Domínio de Git e Controle de Versão
          </h5>

          <p className="w-fit text-2xl text-primary font-light opacity-70">
            Experiente em versionamento de código com Git, gerencio
            eficientemente alterações em projetos colaborativos.
          </p>
        </div>

        <div className="w-full h-fit flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <h5 className="w-fit text-3xl font-bold text-primary">
            Capacidade de Absorver Conhecimento Rapidamente
          </h5>

          <p className="w-fit text-2xl text-primary font-light opacity-70">
            Com uma mente curiosa e flexível, abraço novas tecnologias e
            conceitos com entusiasmo. Estou sempre pronto para enfrentar novas
            oportunidades e expandir meu conjunto de habilidades.
          </p>
        </div>
      </div>
    </section>
  );
}

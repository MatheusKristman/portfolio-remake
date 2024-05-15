import Image from "next/image";

export function Illustration() {
  return (
    <section className="w-full h-[450px] sm:h-[350px] lg:h-[450px] relative">
      <div className="bg-[#323330]/10 absolute top-0 left-0 right-0 bottom-0 z-[9]" />
      <Image
        src="/assets/images/forest.jpg"
        alt="Matheus Kristman"
        fill
        className="object-cover object-center"
      />
    </section>
  );
}

import Image from "next/image";

interface Props {
  title: string;
}

export default function Breadcrumb({ title }: Props) {
  return (
    <section
      className="relative pt-48 pb-28 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(/assets/img/breadcrumb/breadcrumb-bg-1.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container mx-auto text-center">
        <h1 className="text-5xl font-black text-white mb-4">{title}</h1>
        <div className="flex justify-center items-center gap-3 text-white/80">
          <span>Home</span>
          <span className="w-1 h-1 bg-white rounded-full" />
          <span>{title}</span>
        </div>
      </div>

      <Image
        src="/assets/img/shape/inner-dots-shape.png"
        alt=""
        width={120}
        height={120}
        className="absolute bottom-10 right-10 opacity-60"
      />
    </section>
  );
}

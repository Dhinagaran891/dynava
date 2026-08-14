import Image from "next/image";

export default function HeroLogo() {
  return (
    <div className="flex w-full flex-col items-center">
      <Image
        src="/images/logo/dynava-transparent.png"
        alt="Dynava"
        width={380}
        height={120}
        priority
        className="
          h-auto
          w-[220px]
          sm:w-[260px]
          md:w-[300px]
          lg:w-[340px]
        "
        style={{ height: "auto" }}
      />

      <p
        className="
          mt-4
          text-[10px]
          font-medium
          uppercase
          tracking-[0.27em]
          text-slate-700
          sm:mt-5
          sm:text-[11px]
          md:text-xs
        "
      >
        Intelligence for Every Enterprise
      </p>
    </div>
  );
}
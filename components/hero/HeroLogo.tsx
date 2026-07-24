import Image from "next/image";

export default function HeroLogo() {
  return (
   <div className="flex justify-center mt-8 md:mt-10 lg:mt-12">
  <Image
    src="/images/logo/dynava-navbar.png"
    alt="Dynava"
    width={380}
    height={120}
    priority
    className="h-auto w-auto"
  />
</div>
  );
}
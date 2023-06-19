import { displayFont } from "@/components/fonts/displayFont";
import Image from "next/image";

type HeroSection = {
  title: string | React.ReactNode;
  slogan: string;
  imgAlt: string;
  imgURL: string;
};

export function HeroSection({ title, slogan, imgAlt, imgURL }: HeroSection) {
  return (
    <>
      <span
        className={`${displayFont.className} text-6xl text-primary-500 text-center px-5`}
      >
        {title}
      </span>
      <p className="text-center mt-2 text-lg">{slogan}</p>
      <Image
        src={imgURL}
        alt={imgAlt}
        fill
        className="object-cover -z-10 brightness-[0.3] mix-blend-luminosity"
      />
    </>
  );
}

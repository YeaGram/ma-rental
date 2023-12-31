// API import
import Link from "next/link";
import Image from "next/image";

// Componet Ui import
import { displayFont } from "@/components/fonts/displayFont";
import { displayedProducts } from "@/data/displayedProduct";
import { HeroSection } from "./heroSection";

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-[80dvh] max-h-[500px] grid place-content-center isolate bg-base-500">
        <HeroSection
          title={
            <>
              Unleash creativity with <br /> Ma&apos;Rental.
            </>
          }
          slogan="Rent. Shoot. Repeat."
          imgAlt="Hero"
          imgURL="/hero.png"
        />
      </div>
      <div className="px-10">
        <div className="max-w-5xl mx-auto mt-16 ">
          <h2
            className={`${displayFont.className} text-4xl mb-5 text-secondary-500 `}
          >
            Why MaRental?
          </h2>
          <div className="grid md:grid-cols-2  gap-20 text-secondary-600 leading-7">
            <p>
              MaRental provides a stunning array of high-quality camera gear for
              budding photographers and seasoned professionals alike. Choose
              from the latest models and get lost in the world of photography
              with our excellent rental service.
            </p>
            <p>
              Our user-friendly platform allows you to select from popular
              camera brands and lenses with ease. Experience a seamless booking
              and checkout process, ensuring that you can focus on capturing the
              moments that matter most to you.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20 px-10">
        <div className="grid sm:grid-cols-3  max-w-5xl mx-auto gap-5 gap-y-10 md:gap-y-5 ">
          {displayedProducts.map((product, i) => (
            <figure key={i} className="group">
              <div className="relative aspect-square isolate  bg-base-500">
                <Image
                  src={product.path}
                  alt={product.name}
                  fill
                  className="object-cover mix-blend-luminosity group-hover:mix-blend-normal"
                />
              </div>
              <figcaption className="mt-5 text-secondary-600">
                {product.description}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="px-10 mt-32 relative grid place-content-center h-[90dvh] after:animate-pulse after:inset-0 after:block after:absolute after:-z-10 after:bg-cross">
        <div className="max-w-5xl mx-auto">
          <span
            className={`${displayFont.className} text-center block text-6xl text-secondary-500 drop-shadow-[0px_0px_20px_rgba(var(--primary-color),0.3)]`}
          >
            Get Started
          </span>
          <p className="block max-w-md text-center mx-auto mt-10 leading-7 text-xl bg-base-500/70 p-5 rounded-md text-secondary-500">
            Don&apos;t let an empty camera bag hold you back. Dive into the
            world of MaRental&apos;s camera gear and unleash your creative
            potential.
          </p>
          <Link
            href={"/"}
            className="font-bold text-base-500 px-5 py-2 bg-primary-500 hover:bg-primary-400 animate-bounce hover:animate-none rounded-sm border-b-2 border-b-primary-600 mb-5 block w-fit mx-auto mt-10"
          >
            Rent Now
          </Link>
        </div>
      </div>
    </div>
  );
}

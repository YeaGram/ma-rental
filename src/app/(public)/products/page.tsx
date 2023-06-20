// library Imports
import Image from "next/image";
import axios from "axios";

import { displayFont } from "@/components/fonts/displayFont";

import OnShowPopbox from "@/app/(public)/products/onShowPopBox";

import getCurrentDomain from "@/utils/getCurrentDomain";
import PopBox from "./PopBox";

import { PopBoxContextProvider } from "@/context/popBoxContext";

type getCamera = {
  brand?: string;
};

async function getCameras({ brand = "" }: getCamera) {
  const domainName = getCurrentDomain();
  const res = await axios.get(`${domainName}/api/cameras`);
  return res.data;
}

type _ReturnData = {
  name: string;
  imageUrl: string;
  details: string;
};
export default async function Products() {
  const cameras = await getCameras({});
  return (
    <div className="relative z-30 mx-auto">
      <div className="relative min-h-[10rem] grid place-items-center">
        <h1
          className={`${displayFont.className} text-clamp_lg leading-10  text-primary-500 sm:w-1/2 px-5 2xl:pl-10 max-w-7xl mx-auto`}
        >
          Our Products
        </h1>
        <Image
          className="object-cover inset-0 -z-10 mix-blend-luminosity opacity-30"
          src={"/product-page-bg.jpg"}
          alt="product page background"
          fill
        />
      </div>
      <PopBoxContextProvider>
        <PopBox />
        <div className="relative mt-10  bg-productPage bg-cover bg-center bg-no-repeat bg-opacity-10 px-5 before:absolute before:inset-0 before:bg-base-500/90">
          <span className="absolute top-0 h-32 left-0 right-0 z-20 bg-gradient-to-b from-base-500 to-base-500/0"></span>
          <span className="absolute bottom-0 h-32 left-0 right-0  w-full z-20 bg-gradient-to-b from-base-500 to-base-500/0 rotate-180"></span>

          <div className="max-w-6xl mx-auto gap-y-8 gap-x-5 grid grid-auto-fit-[200px] lg:grid-cols-4 px-3 pb-32">
            {cameras.map((camera: _ReturnData, i: number) => {
              return (
                <figure key={i} className="relative flex flex-col">
                  <div className="flex-1 ">
                    <div className="relative aspect-square">
                      <Image
                        className="object-contain relative w-full"
                        src={camera.imageUrl}
                        alt={camera.name}
                        fill
                      />
                    </div>
                    <figcaption className="mt-3 font-bold">
                      {camera.name}
                    </figcaption>
                  </div>
                  <OnShowPopbox url={camera.details}>
                    <span className="text-secondary-500/50 underline hover:text-secondary-500">
                      see details
                    </span>
                  </OnShowPopbox>
                </figure>
              );
            })}
            s
          </div>
        </div>
      </PopBoxContextProvider>
    </div>
  );
}

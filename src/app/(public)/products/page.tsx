// library Imports
import Image from "next/image";
import axios from "axios";

import { displayFont } from "@/components/fonts/displayFont";

import OnClick from "@/clientProviders/onClick";

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
    <div className="relative w-fit z-30 mx-auto">
      <PopBoxContextProvider>
        <PopBox />
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

        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 mt-10">
          {cameras.map((camera: _ReturnData, i: number) => {
            return (
              <figure
                key={i}
                className="relative border-2 border-base-400 p-5 flex flex-col
                gap-4"
              >
                <div className="flex-1">
                  <div className="relative aspect-video">
                    <img
                      className="object-contain relative"
                      src={camera.imageUrl}
                      alt={camera.name}
                    />
                  </div>
                  <figcaption className="mt-3">{camera.name}</figcaption>
                </div>
                <OnClick url={camera.details}>
                  <span className="text-secondary-500/50 underline hover:text-secondary-500">
                    see details
                  </span>
                </OnClick>
              </figure>
            );
          })}
        </div>
      </PopBoxContextProvider>
    </div>
  );
}

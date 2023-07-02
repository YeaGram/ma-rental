import Link from "next/link";
import { formatExtension } from "./formatExtension";

type PopBoxContent = {
  camData: any;
  closeHandler: () => void;
};

export default function PopBoxContent({
  camData,
  closeHandler,
}: PopBoxContent) {
  return (
    <div className="fixed w-full max-w-7xl mx-auto left-0 top-0 py-5 grid place-content-center z-30 animate-fadeIn">
      <div
        className="border-base-400 bg-cover bg-base-500/50 border-2 backdrop-brightness-50 backdrop-blur-sm mx-auto px-10 py-5 shadow-[10px_10px_10px_rgba(0,0,0,0.5)] max-w-lg"
        data-product-code={camData.ProductCode}
      >
        <button onClick={closeHandler} className="text-right w-full">
          close
        </button>

        <div className="mt-5">
          <h3 className="text-xl">{camData.Name}</h3>{" "}
          <div className="mt-1 text-sm font-bold text-yellow-500">
            {camData.ShortSpecs.join(", ")}d ps
          </div>
          <div className="my-4 mt-5 grid place-content-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://digicamfinder.com/opt${formatExtension(
                camData.ImageURL
              )}webp`}
              alt="camera preview"
            />
          </div>
          <p className="mt-4 indent-2 text-sm leading-6 text-ellipsis  overflow-hidden line-clamp-3 ">
            {camData.ReviewData.ExecutiveSummary}
          </p>
          <Link
            href={`/products/${camData.URL.split("/")[2]}/${
              camData.ProductCode
            }`}
            className="block mt-2 text-secondary-500/50 hover:text-secondary-500 italic w-full text-right"
          >
            more...
          </Link>
        </div>
      </div>
    </div>
  );
}

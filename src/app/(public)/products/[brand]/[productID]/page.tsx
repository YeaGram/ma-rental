import { formatExtension } from "../../formatExtension";

export default async function CameraPage({ params }: { params: any }) {
  const domainName = "https://digicamfinder.com";
  const resp = await fetch(
    `${domainName}/_next/data/8CovhfoWdUWz7jciUyjK5/c/${params.productID}.json`
  );
  const data = await resp.json();

  const camera = data.pageProps.camera;

  function Specs() {
    const specs = camera.Specs;
    return Object.keys(specs).map((spec, i) => (
      <div key={i} className="flex ">
        <div className="text-secondary-500/50 min-w-[12rem]">{spec} : </div>
        <div className="flex-1">
          {typeof specs[spec] === "string" ? (
            <>{specs[spec]}</>
          ) : (
            <>
              {specs[spec].map((val: [], i: number) => (
                <span key={i}>{val}</span>
              ))}
            </>
          )}
        </div>
      </div>
    ));
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex">
        <img src={`${domainName}/opt${formatExtension(camera.ImageURL)}webp`} />
        <h2>{camera.Name}</h2>
      </div>
      <div className="mt-2">
        <Specs />
      </div>
    </div>
  );
}

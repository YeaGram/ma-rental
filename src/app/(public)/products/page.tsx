// library Imports
import axios from "axios";
import Image from "next/image";

import { displayFont } from "@/components/fonts/displayFont";
import OnClick from "@/clientProviders/onClick";

async function getCameras(domainName:string = 'https://digicamfinder.com') {

  const postData = JSON.stringify({
    "sortOrder": 3,
    "seed": 1846756515,
    "page": 0,
    "filters": {}
  });

  const res = await axios.post(`${domainName}/api/listCameras`,postData)
  
  function extractData(raw:[]) {
    type _ReturnData = {
      name:string,
      imageUrl:string,
      details:string
    }

    const returnData:_ReturnData[] = []

    raw.forEach((str:string, i:number)=> {
      if(str.length < 5) return;
    
      const regex = /([^\x00-\x1F]+)\x1A([^\x00-\x1F]+)/g; //apa cba?
      const matches = regex.exec(str);
      
      if (matches && matches.length >= 3) {
        const name = matches[1].replace(/^[^a-zA-Z]+/, "");
        const imageUrl = matches[2].slice(1);

        const details = `${domainName}/_next/data/8CovhfoWdUWz7jciUyjK5/c/${imageUrl.split('/')[5]}.json`
    
        returnData.push({ name, imageUrl:`${domainName}${imageUrl}`, details });
      }  
    })
    return returnData;
  }

const dataToExtract = res.data.split('\n')
return extractData(dataToExtract)

}

export default async function Products() {
  const cameras = await getCameras()
  return <div>

    <div className="relative min-h-[10rem] grid place-items-center">
      <h1 className={`${displayFont.className} text-clamp_lg leading-10  text-primary-500 sm:w-1/2 px-5 2xl:pl-10 max-w-7xl mx-auto`}>Our Products</h1>
      <Image className="object-cover inset-0 -z-10 mix-blend-luminosity opacity-30" src={"/product-page-bg.jpg"} alt="product page background" fill/>
    </div>
  
   <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 mt-10">

      {cameras.map((camera, i) => {
        return (
          <figure key={i} className="relative border-2 border-base-400 p-5">
            <div className="relative aspect-video ">
              <img className="object-contain absolute" src={camera.imageUrl} alt={camera.name}  />
            </div>
            <figcaption>{camera.name}</figcaption>
            <OnClick url={camera.details}>
              <span>see details</span>
            </OnClick>
          </figure>
        )
      })}
   </div>

  </div>;
  }


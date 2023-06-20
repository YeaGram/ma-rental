import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const searchParams = url.searchParams;

  const brand = searchParams.get("brand") || "";

  const domainName = "https://digicamfinder.com";
  const postData = JSON.stringify({
    filters: {
      bodyTypes: {
        ACTION_CAM: false,
        BRIDGE: false,
        COMPACT: false,
        COMPACT_SLR: false,
        LARGE_SENSOR_COMPACT: false,
        LARGE_SLR: false,
        MIDSIZE_SLR: false,
        RANGEFINDER: false,
        STANDARD_MIRRORLESS: false,
        ULTRACOMPACT: false,
      },
      brands: {
        canon: brand === "canon",
        fujifilm: brand === "fujifilm",
        leica: brand === "leica",
        nikon: brand === "nikon",
        panasonic: brand === "panasonic",
        sony: brand === "sony",
      },
      megapixels: {
        max: 300,
        min: 0,
      },
      sensorSizes: {
        SENSOR_SIZE_FILTER_APS_C: false,
        SENSOR_SIZE_FILTER_APS_H: false,
        SENSOR_SIZE_FILTER_COMPACT: false,
        SENSOR_SIZE_FILTER_FOUR_THIRDS: false,
        SENSOR_SIZE_FILTER_FULL_FRAME: false,
        SENSOR_SIZE_FILTER_MEDIUM_FORMAT: false,
        SENSOR_SIZE_FILTER_ONE_INCH: false,
      },
      sensorTypes: {
        CCD: false,
        CMOS: false,
        CMOS_BSI: false,
        EXR: false,
        FOVEON: false,
        JFET: false,
        STACKED: false,
      },
    },
    page: 0,
    seed: 1693228898,
    sortOrder: 4,
  });
  const res = await axios.post(`${domainName}/api/listCameras`, postData);

  function extractData(raw: []) {
    type ReturnData = {
      name: string;
      imageUrl: string;
      details: string;
      brand: string;
    };

    const returnData: ReturnData[] = [];

    raw.forEach((str: string, i: number) => {
      if (str.length < 5) return;

      const regex = /([^\x00-\x1F]+)\x1A([^\x00-\x1F]+)/g;
      const matches = regex.exec(str);

      if (matches && matches.length >= 3) {
        const name = matches[1].replace(/^[^a-zA-Z]+/, "");
        const imageUrl = matches[2].slice(1);

        const details = `${domainName}/_next/data/8CovhfoWdUWz7jciUyjK5/c/${
          imageUrl.split("/")[5]
        }.json`;

        returnData.push({
          name,
          imageUrl: `${domainName}${imageUrl}`,
          details,
          brand: searchParams.has("brand") ? brand : "",
        });
      }
    });

    return returnData;
  }

  const dataToExtract = res.data.split("\n");
  const extractedData = extractData(dataToExtract);

  return NextResponse.json(extractedData);
}

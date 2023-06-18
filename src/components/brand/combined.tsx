import { logoFont } from "../fonts/logoFont";
import BrandLogo from "./logo";

export default function CombinedLogo() {
  return (
    <div className="flex gap-1 items-center p-2 w-fit">
      <BrandLogo className="w-10" />
      <span className={`${logoFont.className} text-3xl`}>MaRental</span>
    </div>
  );
}

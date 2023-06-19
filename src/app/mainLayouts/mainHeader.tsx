import CombinedLogo from "@/components/brand/combined";
import Link from "next/link";
import MainNavigationLayout from "./mainNavigation";
import HamburgerBtn from "@/components/action/hamburgerBtn";
import { NavbarContextProvider } from "@/context/navbarContext";

export default function MainHeaderLayout() {
  return (
    <header
      aria-label="main header"
      className="flex sm:flex-row flex-col items-center justify-between px-4 py-2 max-w-7xl mx-auto"
    >
      <NavbarContextProvider>
        <div className="flex justify-between items-center w-full sm:w-auto z-20 relative bg-base-500">
          <Link href={"/"}>
            <CombinedLogo />
          </Link>
          <HamburgerBtn />
        </div>
        <MainNavigationLayout />
      </NavbarContextProvider>
    </header>
  );
}

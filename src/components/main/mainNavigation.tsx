"use client";
import Button from "@/components/action/button";
import NavProvider from "@/clientProviders/navItem";
import { useNavbarContext } from "@/context/navbarContext";

export default function MainNavigationLayout() {
  const { active } = useNavbarContext();
  const navigations = [
    { title: "Products", url: "/products" },
    { title: "Pricing", url: "/pricing" },
    { title: "Contact", url: "/contact" },
  ];
  return (
    <div
      className={`grid ${
        active ? "active" : ""
      } overflow-hidden sm:overflow-auto sm:block w-full sm:w-fit mobileNav`}
    >
      <nav
        className={`min-height-[0]  flex items-center gap-3 text-secondary-600 w-full sm:w-fit sm:flex-row mt-5 py-5 sm:py-0 sm:mt-0 flex-col`}
      >
        {navigations.map((nav, i) => {
          return (
            <NavProvider
              key={i}
              title={nav.title}
              url={nav.url}
              className="hover:text-primary-500 bg-base-900 sm:bg-transparent w-full sm:w-fit py-4 sm:py-0 text-center"
            />
          );
        })}
        <Button
          className=" py-3  sm:py-2 sm:px-4 bg-primary-500 hover:bg-gradient-to-b from-primary-400 to-primary-600 rounded-lg text-base-500 font-bold border-b-2 border-primary-700 mt-3 sm:mt-0 block w-full sm:w-fit text-center "
          type="link"
          url="/auth/login"
        >
          Sign In
        </Button>
      </nav>
    </div>
  );
}

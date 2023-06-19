"use client";

import { useNavbarContext } from "@/context/navbarContext";

type MainNavType = {
  children: React.ReactNode;
};

export default function NavListClientProvider({ children }: MainNavType) {
  const { active } = useNavbarContext();

  return (
    <div
      className={`grid ${
        active ? "grid-rows-[1]" : "grid-rows-[0]"
      } overflow-hidden sm:overflow-auto sm:block w-full sm:w-fit mobileNav`}
    >
      {children}
    </div>
  );
}

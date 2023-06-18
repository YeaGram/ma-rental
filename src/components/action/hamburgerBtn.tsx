"use client";

import { useNavbarContext } from "@/context/navbarContext";

export default function HamburgerBtn() {
  const { setActive } = useNavbarContext();
  return (
    <div
      className="sm:hidden flex flex-col gap-1"
      onClick={() => {
        setActive((prevVal) => !prevVal);
      }}
    >
      {Array.from({ length: 3 }, (_, idx) => (
        <span key={idx} className="block bg-secondary-500 w-7 h-1"></span>
      ))}
    </div>
  );
}

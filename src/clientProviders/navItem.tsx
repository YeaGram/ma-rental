"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavProvider = {
  url: string;
  title: string;
  className?: string;
};

export default function NavProvider({
  url,
  title,
  className = "",
}: NavProvider) {
  const isActive = usePathname().startsWith(url);

  return (
    <Link
      href={url}
      className={`${className} ${
        isActive ? `font-bold text-primary-500 underline bg-base-700 ` : ""
      }`}
    >
      {title}
    </Link>
  );
}

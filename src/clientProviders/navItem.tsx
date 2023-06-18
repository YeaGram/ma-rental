"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavProvider({
  url,
  title,
  className = "",
}: {
  url: string;
  title: string;
  className?: string;
}) {
  const path = usePathname();

  return (
    <Link
      href={url}
      className={`${className} ${path === url ? `font-bold underline` : ""}`}
    >
      {title}
    </Link>
  );
}

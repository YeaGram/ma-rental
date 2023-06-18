"use client";

import { usePathname } from "next/navigation";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return <>{pathname === "/auth" ? "" : children}</>;
}

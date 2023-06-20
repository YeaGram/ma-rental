"use client";

import { usePopBoxContext } from "@/context/popBoxContext";

export default function OnClick({
  children,
  url,
}: {
  children: React.ReactNode;
  url: string;
}) {
  const { setPopBox } = usePopBoxContext();
  function handleClick(event: React.MouseEvent) {
    setPopBox(`${url}`);
  }

  return <span onClick={handleClick}>{children}</span>;
}

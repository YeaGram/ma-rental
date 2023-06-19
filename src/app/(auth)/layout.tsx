import "./globals.css";
import MainFooterLayout from "@/app/mainLayouts/mainFooter";
import MainHeaderLayout from "@/app/mainLayouts/mainHeader";

import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "MaRental",
  description: "A Rent Page for Photograper",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-base-500`}>
        <MainHeaderLayout />
        <MainContentWrapper>{children}</MainContentWrapper>
        <MainFooterLayout />
      </body>
    </html>
  );
}

function MainContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div id="MainWrapper" className="">
      {children}
    </div>
  );
}

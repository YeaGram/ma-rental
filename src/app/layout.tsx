import "./globals.css";

// MainComponent
import MainFooterLayout from "@/components/main/mainFooter";
import MainHeaderLayout from "@/components/main/mainHeader";

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
      <body className={`${nunito.className} dark:bg-base-500`}>
        <MainHeaderLayout />
        <MainContentWrapper>{children}</MainContentWrapper>
        <MainFooterLayout />
      </body>
    </html>
  );
}

function MainContentWrapper({ children }: { children: React.ReactNode }) {
  return <div id="MainWrapper">{children}</div>;
}

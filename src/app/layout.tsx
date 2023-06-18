import "./globals.css";
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
      <body className={nunito.className}>
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

function MainHeaderLayout() {
  return (
    <header>
      <MainNavigationLayout />
    </header>
  );
}

function MainNavigationLayout() {
  return <nav></nav>;
}

function MainFooterLayout() {
  return <footer></footer>;
}

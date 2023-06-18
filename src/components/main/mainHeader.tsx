import CombinedLogo from "@/components/brand/combined";
import Button from "@/components/action/button";
import Link from "next/link";

export default function MainHeaderLayout() {
  return (
    <div className="">
      <header className="flex items-center justify-between px-4 py-2 max-w-7xl mx-auto">
        <Link href={"/"}>
          <CombinedLogo />
        </Link>
        <MainNavigationLayout />
      </header>
    </div>
  );
}

function MainNavigationLayout() {
  const navigations = [
    { title: "Products", url: "/products" },
    { title: "Pricing", url: "/pricing" },
    { title: "Contact", url: "/contact" },
  ];
  return (
    <nav className="flex items-center gap-3 text-secondary-600 ">
      {navigations.map((nav, i) => {
        return (
          <>
            <Link
              key={i}
              type="link"
              href={nav.url}
              className="hover:text-primary-500"
            >
              {nav.title}
            </Link>
          </>
        );
      })}
      <Button
        className="px-4 py-2 bg-primary-500 hover:bg-gradient-to-b from-primary-400 to-primary-600 rounded-lg text-base-500 font-bold border-b-2 border-primary-700 "
        type="link"
        url="/auth/login"
      >
        Sign In
      </Button>
    </nav>
  );
}

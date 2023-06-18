"use client";
import { createContext, useContext, useState } from "react";

interface NavbarContextProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
interface NavbarContextProviderProps {
  children: React.ReactNode;
}

const NavbarContext = createContext<NavbarContextProps>(
  {} as NavbarContextProps
);

export function NavbarContextProvider({
  children,
}: NavbarContextProviderProps) {
  const [active, setActive] = useState(false);

  const contextValue: NavbarContextProps = {
    active,
    setActive,
  };

  return (
    <NavbarContext.Provider value={contextValue}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbarContext(): NavbarContextProps {
  const navbarContext = useContext(NavbarContext);
  if (!navbarContext) {
    throw new Error(
      "useNavbarContext must be used within a NavbarContextProvider"
    );
  }
  return navbarContext;
}

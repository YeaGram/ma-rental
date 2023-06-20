"use client";
import { createContext, useContext, useState } from "react";

interface PopBoxContextProps {
  popBox: string;
  setPopBox: React.Dispatch<React.SetStateAction<string>>;
}
interface PopBoxContextProviderProps {
  children: React.ReactNode;
}

const PopBoxContext = createContext<PopBoxContextProps>(
  {} as PopBoxContextProps
);

export function PopBoxContextProvider({
  children,
}: PopBoxContextProviderProps) {
  const [popBox, setPopBox] = useState("");

  const contextValue: PopBoxContextProps = {
    popBox,
    setPopBox,
  };

  return (
    <PopBoxContext.Provider value={contextValue}>
      {children}
    </PopBoxContext.Provider>
  );
}

export function usePopBoxContext(): PopBoxContextProps {
  const popboxContext = useContext(PopBoxContext);
  if (!popboxContext) {
    throw new Error(
      "usePopBoxContext must be used within a PopBoxContextProvider"
    );
  }
  return popboxContext;
}

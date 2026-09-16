"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type TalkToDynavaContextType = {
  isOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
};

const TalkToDynavaContext =
  createContext<TalkToDynavaContextType | undefined>(undefined);

export function TalkToDynavaProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = () => setIsOpen(true);
  const closeChat = () => setIsOpen(false);
  const toggleChat = () => setIsOpen((current) => !current);

  return (
    <TalkToDynavaContext.Provider
      value={{
        isOpen,
        openChat,
        closeChat,
        toggleChat,
      }}
    >
      {children}
    </TalkToDynavaContext.Provider>
  );
}

export function useTalkToDynava() {
  const context = useContext(TalkToDynavaContext);

  if (!context) {
    throw new Error(
      "useTalkToDynava must be used inside TalkToDynavaProvider"
    );
  }

  return context;
}
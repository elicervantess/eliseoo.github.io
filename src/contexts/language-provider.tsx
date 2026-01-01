"use client";

import * as React from "react";

export type Language = "en" | "es" | "pt";

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
  storageKey?: string;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const initialState: LanguageProviderState = {
  language: "en",
  setLanguage: () => null,
};

const LanguageProviderContext = React.createContext<LanguageProviderState>(initialState);

export function LanguageProvider({
  children,
  defaultLanguage = "en",
  storageKey = "eliseo-ui-language",
  ...props
}: LanguageProviderProps) {
  const [language, setLanguage] = React.useState<Language>(defaultLanguage);

  React.useEffect(() => {
    // Load language from localStorage on mount
    const stored = localStorage.getItem(storageKey) as Language | null;
    if (stored) {
      setLanguage(stored);
    }
  }, [storageKey]);

  React.useEffect(() => {
    // Update html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage: (language: Language) => {
      localStorage.setItem(storageKey, language);
      setLanguage(language);
    },
  };

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = React.useContext(LanguageProviderContext);

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider");

  return context;
};

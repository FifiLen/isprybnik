"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface UserPreferencesContextProps {
  fontSize: "small" | "medium" | "large";
  setFontSize: (size: "small" | "medium" | "large") => void;
  highContrast: boolean;
  setHighContrast: (contrast: boolean) => void;
}

const UserPreferencesContext = createContext<
  UserPreferencesContextProps | undefined
>(undefined);

export const UserPreferencesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [fontSize, setFontSize] = useState<"small" | "medium" | "large">(
    "medium",
  );
  const [highContrast, setHighContrast] = useState(false);

  return (
    <UserPreferencesContext.Provider
      value={{ fontSize, setFontSize, highContrast, setHighContrast }}
    >
      {children}
    </UserPreferencesContext.Provider>
  );
};

export const useUserPreferences = () => {
  const context = useContext(UserPreferencesContext);
  if (context === undefined) {
    throw new Error(
      "useUserPreferences must be used within a UserPreferencesProvider",
    );
  }
  return context;
};

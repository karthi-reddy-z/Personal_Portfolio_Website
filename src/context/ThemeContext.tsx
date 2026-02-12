"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeMode = "professional" | "gamer";

interface ThemeContextType {
    mode: ThemeMode;
    toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<ThemeMode>("professional");

    const toggleMode = () => {
        setMode((prev) => (prev === "professional" ? "gamer" : "professional"));
    };

    useEffect(() => {
        const root = window.document.documentElement;
        if (mode === "gamer") {
            root.classList.add("gamer-mode");
            root.classList.add("dark");
        } else {
            root.classList.remove("gamer-mode");
        }
    }, [mode]);

    return (
        <ThemeContext.Provider value={{ mode, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

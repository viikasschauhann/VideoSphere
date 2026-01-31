"use client";

import { useEffect } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      const prefersDark =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      const theme = stored || (prefersDark ? "dark" : "light");
      if (theme === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    } catch (e) {
      // ignore (SSR safety)
    }
  }, []);

  return <>{children}</>;
}

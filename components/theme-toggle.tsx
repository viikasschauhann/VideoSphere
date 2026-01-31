"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      const prefersDark =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = (stored as "light" | "dark") || (prefersDark ? "dark" : "light");
      setTheme(initial);
      if (initial === "dark") document.documentElement.classList.add("dark");
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    } catch (e) {
      // ignore
    }
  }, [theme]);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      className="rounded-md border px-2 py-1 text-sm"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}

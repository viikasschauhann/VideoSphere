"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      const prefersDark =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-color-scheme: dark)").matches;

      const initial: "light" | "dark" =
        stored === "light" || stored === "dark"
          ? (stored as "light" | "dark")
          : prefersDark
          ? "dark"
          : "light";

      setTheme(initial);
    } catch {
      // ignore
    }
  }, []);

  // Apply theme class and persist preference
  useEffect(() => {
    try {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="rounded-full cursor-pointer"
    >
      {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4 cursor-pointer" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

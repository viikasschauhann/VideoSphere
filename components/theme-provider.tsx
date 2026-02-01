"use client";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Theme is fully handled by ThemeToggle.
  return <>{children}</>;
}

"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Switch } from "./ui/switch";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme("system");
  const [isThemeDark, setIsThemeDark] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const checkTheSystemThemeIsDark =
      document.documentElement.classList.contains("dark");

    if (checkTheSystemThemeIsDark) {
      setChecked(true);
      setIsThemeDark(true);
    } else {
      setIsThemeDark(false);
      setChecked(false);
    }
  }, []);

  return (
    <div className="m-auto">
      <Switch
        aria-readonly
        checked={checked}
        onCheckedChange={(e) => {
          if (e) {
            setTheme("dark");
            setChecked(true);
          } else {
            setTheme("light");
            setChecked(false);

            localStorage.setItem("theme", "light");
          }
        }}
      />
    </div>
  );
}

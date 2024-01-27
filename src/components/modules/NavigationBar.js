import React from "react";
import { ThemeToggle } from "../dark-mode-toggle";

const NavigationBar = () => {
  return (
    <nav className="flex justify-between px-32 py-5">
      <div className="font-mono">portfolio-v7</div>
      <div></div>
      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default NavigationBar;

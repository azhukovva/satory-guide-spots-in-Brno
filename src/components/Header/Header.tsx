import React from "react";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import "./header.css";

type Props = {
  theme: string;
  toggleTheme: () => void;
};

const Header = ({ theme, toggleTheme }: Props) => {
  return (
    <div className={`header ${theme}`} style={{backgroundColor: theme === "light" ? "rgba(255, 255, 255, 0.55)" : "rgba(30, 30, 30, 0.55)"}}>
      <div>@ary.satory</div>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default Header;

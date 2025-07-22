import React from "react";
import "./style.css";
import { Icon } from "@iconify/react";
import { icons } from "../../assets/icons";

type Props = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeToggle: React.FC<Props> = ({ theme, toggleTheme }) => {
  return (
    <div className="switch" onClick={toggleTheme}>
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <span className="slider">
        <span className="icon">
          {/* <Icon icon={theme === "dark" ? icons.dark : icons.light} style={{color: theme === "dark" ? "#0555B4" : "#F597A3"}} /> */}
        </span>
      </span>
    </div>
  );
};

import React from "react";
import "./firstPage.css";
import { Icon } from "@iconify/react";
import syrok from "../../assets/images/syrok.png";
import pivo from "../../assets/images/pivo.png";
import { icons } from "../../assets/icons";

type Props = {
  theme: string;
};

const FirstPage: React.FC<Props> = ({ theme }) => {
  const image = theme === "light" ? syrok : pivo;

  const scrollToOverview = () => {
    const section = document.getElementById("overview");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="first-page">
      <div className="top-content">
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <span className="title">
            COFFEE
            <br />
            SPOTS
          </span>
          <span className="subtitle">you must visit in Brno</span>
        </div>
        {/* <div className="right-content">
          {theme === "light" && <img src={image} alt="" />}
        </div> */}
      </div>
      <div className="bottom-content">
        {/* <button className={`go-button ${theme}`} onClick={scrollToOverview}>
          LET’S GO <Icon icon={icons.down} width={26} />
        </button> */}
        {/* <div className="memeComment"style={{ opacity: ".5", textAlign: "right", lineHeight: "1.5" }}>
          {theme === "light" ? (
            <span>
              * Light Mode is with memes!
              <br />
              You can switch to Dark Mode from header:3
            </span>
          ) : (
            <span>
              * Dark Mode is without memes:(
              <br />
              You can switch to Cringe one from header:3
            </span>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default FirstPage;

import React, { useState } from "react";
import { Cafe } from "../../data/coffeeShops";
import "./CafeDetailsPanel.css"; // styles below
import { Icon } from "@iconify/react";
import { icons } from "../../assets/icons";

const CafeDetailsPanel: React.FC<{
  cafe: Cafe;
  theme: string;
}> = ({ cafe, theme }) => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const handleUpClick = () => {
    setTimeout(() => {
      document
        .getElementById(`${cafe.name}-card`)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="cafe-details-container">
      <div style={{width: "100%", justifyContent: "center", display: "flex"}}>
        <button
          className="up-button-mobile"
          onClick={handleUpClick}
          style={{
            border: theme === "dark" ? "1px solid #fff" : "1px solid #1e1e1e",
          }}
        >
          <Icon
            icon={icons.up}
            width={30}
            color={theme === "dark" ? "#ffffff" : "#1e1e1e"}
          />
        </button>
      </div>

      <div className="cafe-info">
        {!isMapLoaded && !cafe.name.includes("Brunche's") && (
          <div className="spinner-overlay">
            <span>Loading map here...</span>
            <div className="spinner"></div>
          </div>
        )}
        {cafe.name.includes("Brunche's") && (
          <span>
            Unfortunatly, we can't upload map for this place. You can access the
            location{" "}
            <a
              style={{ color: "#515151", fontStyle: "italic" }}
              href="https://maps.app.goo.gl/KFtQQXQojWgg2Nh29"
            >
              here
            </a>{" "}
            :)
          </span>
        )}
        {!cafe.name.includes("Brunche's") && (
          <iframe
            className="map"
            style={{
              borderRadius: "12px",
              border: "1px solid transparent",
              opacity: isMapLoaded ? 1 : 0,
              transition: "opacity .5s ease",
            }}
            src={`https://www.google.com/maps/embed?${cafe.location.link}`}
            width="100%"
            height="40%"
            loading="lazy"
            onLoad={() => setIsMapLoaded(true)}
          />
        )}

        <div className="text">
          <span className="row">
            <span className="titleDetails">{cafe.name}</span>
            <button
              className="up-button"
              onClick={handleUpClick}
              style={{
                border:
                  theme === "dark" ? "1px solid #fff" : "1px solid #1e1e1e",
              }}
            >
              <Icon
                icon={icons.up}
                width={30}
                color={theme === "dark" ? "#ffffff" : "#1e1e1e"}
              />
            </button>
          </span>
          <div className="adressTime">
            <div className="row">
              <div>Open hours:</div>
              <span className="info-text">{cafe.hours}</span>
            </div>
            {cafe.weekendHours && (
              <div className="row">
                <div>Weekend:</div>
                <span className="info-text">{cafe.weekendHours}</span>
              </div>
            )}
            {cafe.closed && (
              <div className="row">
                <div>Closed:</div>
                <span className="info-text">{cafe.closed}</span>
              </div>
            )}
            <div className="row">
              <div>Adress:</div>
              <span className="info-text">{cafe.location.address}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="cafe-images">
        {[cafe.mainImage, ...cafe.images].slice(0, 4).map((img, idx) => (
          <img key={idx} src={img} alt={`${cafe.name} ${idx + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default CafeDetailsPanel;

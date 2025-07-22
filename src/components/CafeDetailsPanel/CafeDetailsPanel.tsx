import React from "react";
import { Cafe } from "../../data/coffeeShops";
import "./CafeDetailsPanel.css"; // styles below

const CafeDetailsPanel: React.FC<{ cafe: Cafe; theme: string }> = ({
  cafe,
  theme,
}) => {
  return (
    <div className="cafe-details-container">
      <div className="cafe-info">
        <span className="titleDeatils">{cafe.name}</span>
        <div className="adressTime">
          <p>Address: {cafe.location.address}</p>
          <p>Open Hours: {cafe.hours}</p>
        </div>
        <div className={`description ${theme}`}>
          <span style={{ opacity: 0.7 }}>@ary.satory</span>
          <p>{cafe.description}</p>
        </div>

        <div className="tags">
          {cafe.tags.map((tag: string) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
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

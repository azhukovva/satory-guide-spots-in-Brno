import "./overview.css";
import ItemCard from "../ItemCard/ItemCard";
import { Cafe, coffeeShops } from "../../data/coffeeShops";
import { useState } from "react";
import CafeDetailsPanel from "../CafeDetailsPanel/CafeDetailsPanel";

type OverviewProps = {
  theme: string;
};

const Overview = ({theme}: OverviewProps) => {
  const [selectedCafe, setSelectedCafe] = useState<Cafe | null>(null);

  const handleCardClick = (cafe: Cafe) => {
    setSelectedCafe(cafe);
    // optionally scroll into view
    setTimeout(() => {
      document
        .getElementById("cafe-details")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div id="overview">
      <div className="item-grid">
        {coffeeShops.map((item, index) => (
          <ItemCard
            key={index}
            title={item.name}
            image={item.mainImage}
            onClick={() => handleCardClick(item)}
          />
        ))}
      </div>
      <div id="cafe-details">
        {selectedCafe && <CafeDetailsPanel cafe={selectedCafe} theme={theme} />}
      </div>
    </div>
  );
};

export default Overview;

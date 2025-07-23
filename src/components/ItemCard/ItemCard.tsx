import { forwardRef } from "react";
import "./itemCard.css";

type Props = {
  title: string;
  image: string;
  onClick?: () => void;
};

const ItemCard = forwardRef<HTMLDivElement, Props> (({ title, image, onClick }, ref) => {
  return (
    <div
      id={`${title}-card`}
      className="item-card"
      style={{ backgroundImage: `url(${image})` }}
      onClick={onClick}
      ref={ref}
    >
      <div className="overlay">
        <span className="card-title">{title}</span>
      </div>
    </div>
  );
});

export default ItemCard;

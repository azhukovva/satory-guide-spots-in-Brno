import "./itemCard.css";

type Props = {
  title: string;
  image: string;
  onClick?: () => void;
};

const ItemCard = ({ title, image, onClick }: Props) => {
  return (
    <div
      className="item-card"
      style={{ backgroundImage: `url(${image})` }}
      onClick={onClick}
    >
      <div className="overlay">
        <span className="card-title">{title}</span>
      </div>
    </div>
  );
};

export default ItemCard;

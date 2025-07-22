import "./itemCard.css";

type Props = {
  title: string;
  image: string;
};

const ItemCard = ({ title, image }: Props) => {
  return (
    <div className="item-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay">
        <span className="card-title">{title}</span>
      </div>
    </div>
  );
};

export default ItemCard;

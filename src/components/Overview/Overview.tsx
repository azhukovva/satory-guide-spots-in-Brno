import "./overview.css"
import ItemCard from '../ItemCard/ItemCard'
import { coffeeShops } from '../../data/coffeeShops'

const Overview = () => {
  return (
    <div id="overview" className="item-grid">
      {coffeeShops.map((item, index) => (
        <ItemCard key={index} title={item.name} image={item.mainImage} />
      ))}
    </div>
  )
}

export default Overview
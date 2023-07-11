import { RestaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  return (
    <div className="Restaurant-List">
      {RestaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} />;
      })}
    </div>
  );
};

export default Body;
 
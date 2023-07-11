import { RestaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value=" "
        />

        <button className="search-btn">Search</button>
      </div>
      <div className="Restaurant-List">
        {RestaurantList.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} />;
        })}
      </div>
    </>
  );
};

export default Body;

import { RestaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  const SearchTxt = "KFC";
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={SearchTxt}
          onChange={(e) => (SearchTxt = e.target.value)}
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

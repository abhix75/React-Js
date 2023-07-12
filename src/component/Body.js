import { useEffect, useState } from "react";
import { RestaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
  return filterData;
}
const Body = () => {
  const [allrestaurant, setAllrestaurant] = useState([]);
  const [filterrestaurants, setFilterRestaurants] = useState([]);
  const [SearchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setAllrestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  //not render component
  if (!allrestaurant) return null;

  if (filterrestaurants?.length == 0) return <h1>NO Restaurant Matches Your Search!!!</h1>;

  return allrestaurant?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={SearchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(SearchTxt, allrestaurant);
            // update the state of restaurants list
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="Restaurant-List">
        {filterrestaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} />;
        })}
      </div>
    </>
  );
};

export default Body;

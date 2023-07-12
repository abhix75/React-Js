import { useEffect, useState } from "react";
import { RestaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.includes(searchText)
  );
  return filterData;
}
const Body = () => {
  const [restaurants, setRestaurants] = useState(RestaurantList);
  const [SearchTxt, setSearchTxt] = useState("");
  
useEffect(()=>{
  console.log("call the function when the dependencies array changes")
},[restaurants]);
  return (
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
            const data = filterData(SearchTxt, restaurants);
            // update the state of restaurants list
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="Restaurant-List">
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} />;
        })}
      </div>
    </>
  );
};

export default Body;

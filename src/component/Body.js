import { useState } from "react";
import { RestaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
//   const SearchTxt = "KFC";

//SearchTxt is a Local State variable

  const [SearchTxt] = useState("KFC"); //To create a State Variable
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

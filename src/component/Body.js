import { useState } from "react";
import { RestaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  //   const SearchTxt = "KFC";

  //SearchTxt is a Local State variable

  const [SearchTxt, setSearchTxt] = useState("KFC"); //To create a State Variable

  const [SearchOnClick, setSearchOnClick] = useState("false");

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={SearchTxt}
          onChange={(e) =>
            //   e.target.value --> whatever you write in the input

            setSearchTxt(e.target.value)
          }
        />
        <h1>{SearchOnClick}</h1>
        <button
          className="search-btn"
          onClick={() => {
            setSearchOnClick("true");
          }}
        >
          Search
        </button>
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

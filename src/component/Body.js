import { useEffect, useState } from "react";
import { RestaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import {filterData} from "../utils/helper"
import useOnline from "../utils/useOnline";
const Body = () => {
  const [allrestaurant, setAllrestaurant] = useState([]);
  const [filterrestaurants, setFilterRestaurants] = useState([]);
  const [SearchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2960587&lng=85.8245398&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setAllrestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }
  const isonline=useOnline();
  if(!isonline){
    return <h1> You are Offline Please Check your Internet Connection</h1>
  }

  //not render component
  if (!allrestaurant) return null;

  // if (filterrestaurants?.length == 0)
  //   return <h1>NO Restaurant Matches Your Search!!!</h1>;

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
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              {" "}
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;

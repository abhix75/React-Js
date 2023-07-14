import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Shimmer } from "react-shimmer";
// import { IMG_CDN } from "../constant";
import { IMG_CDN_URL } from "../constant";
const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  const [restaurant, setRestaurant] = useState(null);
  const [restaurantmenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+id
      );
      const json = await data.json();
      console.log(json.data);
      setRestaurant(json.data.cards[0].card.card.info);
      console.log("Menus",json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name);
      setRestaurantMenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
          <div>
      <h1>Restaurant id: {id}</h1>
      <h2>Restaurant name: {restaurant.name}</h2>
      <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
      <h2>Restaurant city: {restaurant.city}</h2>
      <h3>{restaurant?.areaName}</h3>
      <h3>{restaurant?.avgRating} stars</h3>
      <h3>{restaurant?.costForTwoMessage}</h3>
    </div>
    
    <div>
        <h1>Menu</h1>
        <ul>
        {Object.values(restaurantmenu).map((info)=> (
            <li key={info.id}>{info.card.info.name}</li>
          ))}
        </ul>
      </div>
    </div>
    
  );
};

export default RestaurantMenu;

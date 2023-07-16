import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useRestaurant from "../utils/useRestaurant";
import { IMG_CDN_URL } from "../constant";
const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;

  const { restaurant, restaurantmenu } = useRestaurant(id);

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
          {Object.values(restaurantmenu).map((info) => (
            <li key={info.card.info.id}>{info.card.info.name}  <ul><img className="menuimage" src= {IMG_CDN_URL+info.card.info.imageId}/></ul></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

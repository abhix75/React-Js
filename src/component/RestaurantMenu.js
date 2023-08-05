import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useRestaurant from "../utils/useRestaurant";
import { IMG_CDN_URL } from "../constant";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;

  const { restaurant, restaurantmenu } = useRestaurant(id);
  
  const dispatch = useDispatch();

  const addFoodItems=(item)=>{
    dispatch(addItems(item));
  };
  
  
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap">
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
            <li className=" flex justify-between bg-pink-50 shadow-lg"key={info.card.info.id}><ul className="font-bold">{info.card.info.name}</ul>  <ul><img className="w-52  p-6 m-6 shadow-lg " src= {IMG_CDN_URL+info.card.info.imageId}/>-
     <button className="p-2 m-5 bg-green-100" onClick={()=>addFoodItems(info.card.info)}>ADD</button></ul></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu
import { IMG_CDN_URL } from "../constant";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating,user }) => {
  return (
    <div className="w-60 p-6 m-6 shadow-lg bg-purple-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} star</h4>
      <h4>{user.name} </h4>
    </div>
  );
};

export default RestaurantCard;

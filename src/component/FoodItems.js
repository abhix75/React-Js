import { IMG_CDN_URL } from "../constant";

const FoodItem = ({ name, description, imageId,price }) => {
 
  return (   
    <div className="w-60 p-6 m-6 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + imageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <span >₹{price / 100 + " FOR TWO"}</span>
  
    </div>
  );
};

export default FoodItem;

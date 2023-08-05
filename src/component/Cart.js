import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { clearCart } from "../utils/cartSlice";
const cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearcart = () =>{
     dispatch(clearCart());
  }
  return (
    <div >
      {" "}
      <h1 className="flex bold text text-3xl">Cart Component- {cartItems.length}</h1>
      <button className=" p-1,m-5 bg-green-100" onClick={()=>handleClearcart()}>ClearCart</button>
      <div className="flex">
      {cartItems.map(item =>  <FoodItems key={item.id} {...item} />)}
      </div>
      
    
    </div>
  );
};

export default cart;

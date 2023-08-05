import { useState } from "react";
import Logo from "../asset/image/Food-Villa.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

//Named export
const Title = () => (
  <a href="/">
    <img className="h-28 p-2" alt="Food_Villa_Logo" src={Logo} />
  </a>
);

//Header
const Header = () => {
  const token = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(
    token?.length === 100 ? true : false
  );
  const navigate = useNavigate();

  const cartItems = useSelector(store => store.cart.items)
  console.log("cartItems",cartItems)
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to={"/"}>
            {" "}
            <li className="px-2">Home</li>{" "}
          </Link>
          <Link to={"/about"}>
            {" "}
            <li className="px-2">About</li>{" "}
          </Link>
          <Link to={"/contact"}>
            {" "}
            <li className="px-2">Contact</li>
          </Link>

          <Link to={"/instamart"}>
            <li className="px-2">Instamart</li>
          </Link>

          <Link to={"/cart"}>
            <li className="px-2">Cart-{cartItems.length} items</li>
          </Link>
        </ul>
      </div>
      {isLoggedIn ? (
        <button className="px-2" onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button className="px-2" onClick={() => setIsLoggedIn(true)}>
          LogIn
        </button>
      )}
    </div>
  );
};
//default Export
export default Header;

import { useState } from "react";
import Logo from "../asset/image/Food-Villa.jpg"
//Named export
const Title = () => (
  <a href="/">
    <img
      className="Logo"
      alt="Food_Villa_Logo"
      src={Logo}
    />
  </a>
);

//Header
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
      )}
    </div>
  );
};
//default Export
export default Header;

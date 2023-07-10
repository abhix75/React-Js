import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="title" key="h1">
    Food Villa
  </h1>
);


//Components
//-->Functional component
//-->class Based component

//functional component
const HeaderComponent = () => (
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
 
  </div>
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);

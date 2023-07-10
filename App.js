import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
   <a href="/">
    <img className="Logo"
     alt="Food_Villa_Logo"
     src="https://scontent.fbbi6-1.fna.fbcdn.net/v/t39.30808-6/300568234_1119074258685043_4997319920694524626_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=eeHdQrIHvrEAX_K6ih4&_nc_ht=scontent.fbbi6-1.fna&oh=00_AfBORaTnIBDdJuIMLje038Hq8xBqMLxNmJSf9GfpFyur9Q&oe=64B1FDDD"
     />
   </a>
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

//Body

const DailySushi = {

  name:"Daily Sushi",
  image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mpnblqqkh7xpi4h0fnju",
  cusines:["Japanesh","Ashian","Korean"],
  rating:"4.2",
}

const RestaurantCard = () =>{
  return(
    <div className="card">
      <img alt="Daily Sushi" src={DailySushi.image}/>
      <h2>{DailySushi.name}</h2>
      <h3>{DailySushi.cusines.join(", ")}</h3>
      <h4>{DailySushi.rating}</h4>
    </div>
  )

}

const Body = () => {
  return (
    <div>
      <RestaurantCard/>
    </div>
  )
}

const Footer = () => {
  return <h4>footer</h4>
}


const AppLayout = () =>{
  return (
    <>
    <HeaderComponent/>
    <Body/>
    <Footer/>  
    </>
  
  )
}

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

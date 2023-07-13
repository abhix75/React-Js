import React from "react";
import ReactDOM from "react-dom/client";
//default Import
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import Footer from "./component/Footer.js";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./component/About.js";
//Body

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const approuter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>
  },
  {
    path:'/about',
    element:<About/>
  }
])

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter}/>);

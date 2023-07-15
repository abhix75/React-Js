import React from "react";
import ReactDOM from "react-dom/client";
//default Import
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import Footer from "./component/Footer.js";
import About from "./component/About.js";
import Error from "./component/Error.js";
import Contact from "./component/contact.js";
import RestaurantMenu from "./component/RestaurantMenu.js";
import Profile from "./component/Profile.js";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

//Body

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
   element:<AppLayout/>,
   errorElement:<Error/>,
   children:
    [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children:
        [
          {
            path:"profile",
            element:<Profile />
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },

    ]
   
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);

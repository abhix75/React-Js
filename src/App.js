import React from "react";
import ReactDOM from "react-dom/client";
//default Import
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import Footer from "./component/Footer.js";
import About from "./component/About.js";
import Error from "./component/Error.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

const approuter = createBrowserRouter([
  {
    path: "/",
   element:<AppLayout/>,
   errorElement:<Error/>
  },
  {
    path: "/about",
    element: <About />,
  },
]);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);

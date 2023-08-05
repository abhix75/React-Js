import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
//default Import
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import Footer from "./component/Footer.js";
import Error from "./component/Error.js";
import Contact from "./component/contact.js";
import RestaurantMenu from "./component/RestaurantMenu.js";
import Profile from "./component/ProfileClass.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Shimmer } from "react-shimmer";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import Cart  from "./component/Cart.js";

const Instamart = lazy(() => import("./component/Instamart"));
const About = lazy(() => import("./component/About.js"));
//Body

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body user={{
          name:"Abhijit Food HUB",
          email:"abhijitmishraak10@gmail.com"
        }}/>,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path:"/cart",
        element: <Cart/>,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);

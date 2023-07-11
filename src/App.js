import React from "react";
import ReactDOM from "react-dom/client";
//default Import
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import Footer from "./component/Footer.js";

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

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

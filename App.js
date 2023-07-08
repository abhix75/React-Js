import React from "react";
import  ReactDOM  from "react-dom/client";
 
const heading =(
    <h1 id='title' key='h1'>
        Namaste React
    </h1>
)
//Components
//-->Functional component
//-->class Based component

//functional component
const HeaderComponent = () => (
    <div>

    {heading}
     <h1> Namaste React from Functional Component</h1>
    <h2>This functional component from h2 tag</h2>
    </div>
)


console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);

import React from "react";
import  ReactDOM  from "react-dom/client";
 

// const heading = React.createElement(
//     "div",
//     {
//         id:"container",
//     },
//     [
//         React.createElement(
//         "h1",
//         {
//             id: 'title',
//             key:"h1"
//         }
//         ,
//         "Namaste React"
//     ), 
//     React.createElement(
//         "h2",
//         {
//             id: 'title',
//             key:"h2"
//         }
//         ,
//         "Namaste React 2"
//     ),
//     React.createElement(
//         "h3",
//         {
//             id: 'title',
//             key:"h3"
//         }
//         ,
//         "Namaste React 3"
//     )
//     ]
// );



// same code using JSX

const heading =(
    <h1 id='title' key='h1'>
        Namaste React
    </h1>
)

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

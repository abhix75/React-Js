import { Outlet } from "react-router-dom";
//import Profile from "./ProfileClass";
import ProfileFunctional from "./Profile";
import React from "react";
// const About = () => {
//   return (
//     <div>
//    <h1>About Page</h1>
//    <p>The Owner of this company is Abhijit Mishra</p>
//    <Profile name={"Abhijit Mishra From Class Based "}/>
//    <ProfileFunctional name={"Abhijit Mishra From Functionsl Based"}/>
//     </div>
//   );
// };

// export default About;

class About extends React.Component {

  constructor(props){
      super(props)

      console.log("Parent Constructor");
  }

  componentDidMount(){
    console.log("Parent ComponentDidMount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About Page</h1>
        <p>The Owner of this company is Abhijit Mishra</p>
        <Outlet/>
      </div>
    );
  }
}

export default About



/**
 * ORDER OF EXECUTION 
 * 
 * Parent Constructor
 * Parent render
 * First Child Constructor
 * First Child render
 * Second Child Constructor
 * Second Child render
 * 
 * 
 * DOM UPDATED FOR CHILDREN
 * 
 * First ComponentDidMount
 * Second ComponentDidMount
 * Parent ComponentDidMount
 * 
 */
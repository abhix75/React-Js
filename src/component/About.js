import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
const About = () => {
  return (
    <div>
   <h1>About Page</h1>
   <p>The Owner of this company is Abhijit Mishra</p>
   <Profile/>
    </div>
  );
};

export default About;

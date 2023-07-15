import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
   <h1>About Page</h1>
   <p>The Owner of this company is Abhijit Mishra</p>
   <Outlet/>
    </div>
  );
};

export default About;

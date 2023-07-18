import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className=" mx-10 m-1 p-2 border-2 border-black">
      <h2 className=" text-xl border-2 font-semibold px-11 m-2 border-black">
        {title}
      </h2>
      {isVisible ? (
        <button
          className=" border-2 p-1 border-blue-500"
          onClick={() => setIsVisible(false)}
        >
          hide
        </button>
      ) : (
        <button
          className=" border-2 p-1 border-blue-500"
          onClick={() => setIsVisible(true)}
        >
          show
        </button>
      )}

      {isVisible && <p className=" m-1 p-1 ">{description}</p>}
    </div>
  );
};

const About = () => {
  const [sectionConfig, setSectionConfig] = useState({
    showAbout: false,
    showTeam: false,
    showDetails: false,
    showProduct: false,
    showCareer: false,
  });

  return (
    <div className=" flex flex-col ">
      <h1 className=" m-8 px-16 text-2xl font-semibold">Instamart</h1>
      <Section
        title="About Instamart"
        isVisible={sectionConfig.showAbout}
        setIsVisible={() => {
          setSectionConfig({
            showAbout: true,
            showTeam: false,
            showDetails: false,
            showProduct: false,
            showCareer: false,
          });
        }}
        description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
      />
      <Section
        title="Team Instamart"
        isVisible={sectionConfig.showTeam}
        setIsVisible={() => {
          setSectionConfig({
            showAbout: false,
            showTeam: true,
            showDetails: false,
            showProduct: false,
            showCareer: false,
          });
        }}
        description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
      />
      <Section
        title="Details Instamart"
        isVisible={sectionConfig.showDetails}
        setIsVisible={() => {
          setSectionConfig({
            showAbout: false,
            showTeam: false,
            showDetails: true,
            showProduct: false,
            showCareer: false,
          });
        }}
        description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
      />
      <Section
        title="Product Instamart"
        isVisible={sectionConfig.showProduct}
        setIsVisible={() => {
          setSectionConfig({
            showAbout: false,
            showTeam: false,
            showDetails: false,
            showProduct: true,
            showCareer: false,
          });
        }}
        description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
      />
      <Section
        title="Career Instamart"
        isVisible={sectionConfig.showCareer}
        setIsVisible={() => {
          setSectionConfig({
            showAbout: false,
            showTeam: false,
            showDetails: false,
            showProduct: false,
            showCareer: true,
          });
        }}
        description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
      />
    </div>
  );
};

export default About;

// import { Outlet } from "react-router-dom";
// import Profile from "./ProfileClass";
// import ProfileFunctional from "./Profile";
// import React from "react";
// const About = () => {
//   return (
//     <div>
//    <h1>About Page</h1>
//    <p>The Owner of this company is Abhijit Mishra</p>
//    {/* <Profile name={"Abhijit Mishra From Class Based "}/> */}
//    <ProfileFunctional name={"Abhijit Mishra From Functionsl Based"}/>
//    {/* <Outlet/> */}
//     </div>
//   );
// };

// export default About;

// class About extends React.Component {

//   constructor(props){
//       super(props)

//       // console.log("Parent Constructor");
//   }

//   componentDidMount(){
//     // console.log("Parent ComponentDidMount");
//   }
//   render() {
//     // console.log("Parent render");
//     return (
//       <div>
//         <h1>About Page</h1>
//         <p>The Owner of this company is Abhijit Mishra</p>
//         <Outlet />
//       </div>
//     );
//   }
// }

// export default About

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

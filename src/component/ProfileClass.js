import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        bio: " ",
      },
    };
    console.log("child Constructor");
  }

  // async componentDidMount() {
  //   const data = await fetch("https://api.github.com/users/abhix75");
  //   const json = await data.json();

  //   this.setState({
  //     userInfo: json,
  //   });
  //   console.log("child ComponentDidMount");
  // }
  componentDidMount() {
    console.log("child ComponentDidMount");
    this.timer = setInterval(() => {
      console.log("Namaste React")
    }, 1000);
  }
  componentDidUpdate() {
    console.log("child  ComponentDidUpdate");
  }
  componentWillUnmount() {

    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }
  render() {
    console.log("child render");
    return (
      <div>
        <h1>Profile From class</h1>
        <h3>Name:{this.state.userInfo.name}</h3>
        <h3>
          Avatar:
          <img src={this.state.userInfo.avatar_url} />
        </h3>
        <h3>Bio:{this.state.userInfo.bio}</h3>
      </div>
    );
  }
}
export default Profile;

/**
 * 
 * ORDER OF EXECUTION
 * 

 * Child Constructor
 * Child render
 * 
 * 
 * DOM IS UPDATED
 * JSON IS LOGGED IN CONSOLE
 * 
 * 
 * Child ComponentDidMount
 * Child Render
 * 
 * Child ComponentDidUpdate
 * 
 */

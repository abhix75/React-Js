import React from "react";
class Profile extends React.Component {

    constructor(props)
    {
        super(props);

        this.state={
            count:0
        }
      
    }
  render() {
    return( 
    <div>
     <h1>Profile From class</h1>
     <h3>Name:{this.props.name}</h3>
     <h3>Count:{this.state.count}</h3>
    </div> ) ;
  }
}
export default Profile;

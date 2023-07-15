import React from "react";
class Profile extends React.Component {

    constructor(props)
    {
        super(props);

        this.state={
            count:0,
            count2:2
        }
      console.log("child Constructor"+ this.props.name);
    }

    componentDidMount()
    {
        console.log("child ComponentDidMount"+ this.props.name)
    }
  render() {

    console.log("child render"+ this.props.name);
    return( 
    <div>
     <h1>Profile From class</h1>
     <h3>Name:{this.props.name}</h3>
     <h3>Count:{this.state.count}</h3>
     <h3>Count:{this.state.count2}</h3>
     <button onClick={()=>{
        this.setState({
            count:1,
            count2:5
        })
     }}>Count</button>

    </div> ) ;
  }
}
export default Profile;

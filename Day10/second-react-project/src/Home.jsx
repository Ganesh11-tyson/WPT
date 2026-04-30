import { Component } from "react";


class Home extends Component {
  state = {Name : "Ganesh" ,Address:"Nanded"}

  changeName =()=>{
      this.setState({Name:"Wakde"});
  }

  changeAddress=()=>{
    this.setState({Address:"Pune"})
  }

  render() { 
    return (
      <>
      <h1>Welcome {this.state.Name}</h1>
      <h1>From {this.state.Address}</h1>
      <button onClick={this.changeName}>clickme changeName</button>
       <button onClick={this.changeAddress}>clickme changeAddress</button>
      </>
    );
  }
}
 
export default Home;
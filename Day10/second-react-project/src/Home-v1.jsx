import { Component } from "react";


class Home extends Component {
  state = {emp :{Name : "Ganesh" ,Address:"Nanded"}}

  changeName =()=>{
      var copyofEmp={...this.state.emp}
      copyofEmp.Name="Wakde" 
      this.setState({emp:copyofEmp});
  }

  changeAddress=()=>{
    var copyofEmp={...this.state.emp}
    copyofEmp.Address="Pune"
    this.setState({emp:copyofEmp})
  }

  render() { 
    return (
      <>
      <h1>Welcome {this.state.emp.Name}</h1>
      <h1>From {this.state.emp.Address}</h1>
      <button onClick={this.changeName}>clickme changeName</button>
       <button onClick={this.changeAddress}>clickme changeAddress</button>
      </>
    );
  }
}
 
export default Home;
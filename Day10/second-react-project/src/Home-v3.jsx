import { Component } from "react";

class Home extends Component {
    state = {  
             emps : []
    } 

    componentDidMount(){
        this.getData();
    }

    getData = ()=>{
        var helper= new XMLHttpRequest();
        helper.onreadystatechange=()=>{
            if(helper.readyState==4 && helper.status==200){
               var reply = JSON.parse(helper.responseText);
                this.setState({emps:reply.users})
            }
        }
        helper.open("GET","https://dummyjson.com/users");
        helper.send();
    }
    render() { 
        return (
            <>
              <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>firstName</th>
                        <th>lastName</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      this.state.emps.map((emp)=>
                        {
                        return (<tr  key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                            </tr>);
                      })       
                    }
                </tbody>
              </table>

            </>
        );
    }
}
 
export default Home;
 
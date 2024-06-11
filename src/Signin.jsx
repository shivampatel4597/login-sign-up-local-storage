import { Component } from "react";

class Signin extends Component{
    constructor(props){
        super(props)
        this.state = {arr:[], Name:"", Gmail:"", Password:""};
    }

    componentDidMount(){
        
        let getArrData = JSON.parse(localStorage.getItem("arrData"));

        if(getArrData){
           console.log("getArrData", getArrData)
           this.setState({arr:getArrData})
        }
       

    }
handleForm(e){
    e.preventDefault();

   let cat =  this.state.arr.filter((value) =>   {
    return value.Gmail === this.state.Gmail && value.Password === this.state.Password
   }   
    );
// console.log(c)
    // const {a:name, b:email, c:password} = cat;
    if(cat.length>=1){
  
        alert("user is present");
    }
    else{
        alert("user is not present")
    }
  
// console.log(a,  "", b, "", c);
    
}

forgot = ()=>{
    alert("forgot password")
   
}


 render(){
    return(
 <>

        <h1>Signin form</h1>
        <form onSubmit={(e)=>this.handleForm(e)}>
            <label>Please enter Your name</label> <br/><br/>
    <input  type="text" value={this.state.Name} required onChange={(e)=>this.setState({Name:e.target.value})}/> <br/><br/>
    <label>Please enter Your Email</label> <br/><br/>
    <input type="email" value={this.state.Gmail} required onChange={(e)=>this.setState({Gmail:e.target.value})}/><br/><br/>
    <label>Please enter Password</label> <br/><br/>
    <input  type="password" value={this.state.Password} required onChange={(e)=>this.setState({Password:e.target.value})}/> <br/><br/>
    <button type="submit">Submit</button>
    <button onClick={this.forgot}>Forget password</button>


        </form>
        </>
    )
 }
}

export default Signin
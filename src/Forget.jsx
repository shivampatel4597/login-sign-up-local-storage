import React, { Component } from "react";
import "./forget.css"
class Forget extends Component{
constructor(props){
super(props)
this.state = {arr:[],Gmail:"", otp:"", otpMatch:""  ,otpBlock:false, passChange: false,newPass:"", newPassRen:""};
}


componentDidMount(){
    let getArrData = JSON.parse(localStorage.getItem("arrData"));
   
    if(getArrData){
       console.log("getArrData", getArrData)
       this.setState({arr:getArrData})
    }
   
   }

gmailSubmitted = ()=>{


    //  first check email entered present in db or not
    let checking = this.state.arr.filter((item)=>{
        return  item.Gmail === this.state.Gmail
      })
if(checking.length>=1){
 alert("email present")
 
// random 6 digit otp generator
let no = "";
for(let i=0;i<6;i++){
    no+= Math.floor((Math.random()*9)+1);
}

console.log(no);
this.setState({otp:no})



this.setState({otpBlock:true})



}
else{
    alert("email not found  please enter again")
    this.setState({Gmail:""})
}

}

otpSubmitted =()=>{
  if(this.state.otp === this.state.otpMatch){
    this.setState({passChange:true})
  }
  else{
    alert("otp not matched")
  }
}

passwordChange= ()=>{
if(this.state.newPass === this.state.newPassRen){
  let newArr = this.state.arr.map((item)=>{
    if(item.Gmail===this.state.Gmail){
        item.Password = this.state.newPassRen
    }
    return item;
   })

   localStorage.setItem("arrData",JSON.stringify(newArr)) 
}
else{
    alert("pass not match") 
}
}


render(){
    return (

<>

<h1>Forget password page</h1>  
<div className="box">
    <label>Please enter your email</label> <br/><br/>
<input type="email" onChange={(e)=>this.setState({Gmail: e.target.value})}/>
<br/> <br/>
<button onClick={this.gmailSubmitted}>submit</button> 

</div> <br/> <br/>

{/* otp block */}
{this.state.otpBlock? <div className="box">

<label>Enter your otp</label><br/><br/>
<input type="text"minLength={6} maxLength={6} onChange={(e)=>this.setState({otpMatch:e.target.value})}/><br/><br/>
<button onClick={this.otpSubmitted}>Submit</button>
</div>:""}

{/* password change block here */}
{this.state.passChange? <div className="box">
    <input type="text" placeholder="Enter new password" onChange={(e)=>this.setState({newPass:e.target.value})} /> <br/><br/>
    <input type="text" placeholder="Renter new password"  onChange={(e)=>this.setState({newPassRen:e.target.value})}/> <br/><br/>
    <button onClick={this.passwordChange}>Submit</button>

</div> : ""}
</>


    )
}

}

export default Forget;
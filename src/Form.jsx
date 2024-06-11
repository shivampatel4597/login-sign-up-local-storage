import{Component} from "react";
import  "./form.css"

class Form extends Component{
    constructor(props){
        super(props)
        this.state = {arr:[], Name:"",Gmail:"", Password:"", NameField:false, GmailField:false, PasswordField:false};
    }


componentDidMount(){
 let getArrData = JSON.parse(localStorage.getItem("arrData"));

 if(getArrData){
    console.log("getArrData", getArrData)
    this.setState({arr:getArrData})
 }

}

emailCheck =()=>{
 
    // if(checking.lenght>=1){
    //     return true
    // }
    // else{
    //     return false;
    // }
}
   
    handleForm =(e)=>{
        e.preventDefault()
        
    //    this.setState({arr:[...this.state.arr,{Name:this.state.Name,Gmail:this.state.Gmail, Password:this.state.Password}]})


    // form validations
    if((this.state.Name === null || this.state.Name === "") && (this.state.Gmail === null || this.state.Gmail === "") && (this.state.Password === null || this.state.Password === "")){
        this.setState({NameField : true})
        this.setState({GmailField : true})
        this.setState({PasswordField : true})

    }
    else if(this.state.Name === null || this.state.Name === "" ){
        this.setState({NameField : true})
        // alert("fill the name")
    } 
    else if(this.state.Gmail === null || this.state.Gmail === ""){
        // alert("fill the gmail")
        this.setState({GmailField : true})
    }
    else if(this.state.Password === null || this.state.Password === "")
    {
        // alert("fill the pass")
        this.setState({PasswordField : true})
    }

     
        let checking = this.state.arr.filter((item)=>{
            return  item.Gmail === this.state.Gmail
          })
    if(checking.length>=1){
     alert("email present")
     this.setState({Gmail:"", Name:"", Password:""})
  
   

     return "";
    }
   
      
          console.log(checking);
     





       this.setState((prev)=>{
        return {
             arr:[
                ...prev.arr,{Name:prev.Name,Gmail:prev.Gmail, Password:prev.Password}
            ]
        }
        }, ()=>   localStorage.setItem("arrData",JSON.stringify(this.state.arr)) )
   
       alert("handling form")
    // localStorage.setItem("arrData",JSON.stringify(this.state.arr))
    console.log(this.state.arr)
 
    this.setState({Name:"",Gmail:"", Password:"", NameField:false, GmailField:false,PasswordField:false})
         
        

  
    }
    render(){
        const {NameField,GmailField, PasswordField} = this.state
        
        
        return(
<>
    {/* {console.log("namecss",Namecss)} */}
            <h1>Registration Form</h1>
        <form onSubmit={(e)=>this.handleForm(e)}>
            <label>Please enter Your name</label> <br/><br/>
    <input    type="text" value={this.state.Name}  onChange={(e)=>this.setState({Name:e.target.value})}/> <br/><br/>
    {NameField ? <p>Please enter your name</p> : null}
    <label>Please enter Your Email</label> <br/><br/>
    <input type="email" value={this.state.Gmail}  onChange={(e)=>this.setState({Gmail:e.target.value})}/><br/><br/>
   {GmailField ? <p>Please enter your Email</p> :null }
    <label>Please enter Password</label> <br/><br/>
    <input  type="password" value={this.state.Password}  onChange={(e)=>this.setState({Password:e.target.value})}/> <br/><br/>
    {PasswordField ? <p>Please enter your Password</p> : null}
    <button type="submit">Submit</button>


        </form>

        <div>
{
    this.state.arr &&  this.state.arr.map((item,index)=>(
    <div className="block" key={index}>
<p>{item.Name}</p> <p>{item.Gmail}</p>  <p>{item.Password}</p>

    </div>
  ))}
        </div>
        </>
        )
    }
  
}

export default Form
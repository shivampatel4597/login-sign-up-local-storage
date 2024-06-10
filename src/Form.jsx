import{Component} from "react";
import  "./form.css"

class Form extends Component{
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
   
    handleForm =(e)=>{
        e.preventDefault()
        
    //    this.setState({arr:[...this.state.arr,{Name:this.state.Name,Gmail:this.state.Gmail, Password:this.state.Password}]})

       this.setState((prev)=>{
        return {
            ...prev, arr:[
                ...prev.arr,{Name:prev.Name,Gmail:prev.Gmail, Password:prev.Password}
            ]
        }
        }, ()=>   localStorage.setItem("arrData",JSON.stringify(this.state.arr)) )
   
       alert("handling form")
    // localStorage.setItem("arrData",JSON.stringify(this.state.arr))
    console.log(this.state.arr)
           
    this.setState({Name:""})
           this.setState({Gmail:""})
           this.setState({Password:""})

     
    }
    render(){
        
        return(
<>
    
            <h1>Registration Form</h1>
        <form onSubmit={(e)=>this.handleForm(e)}>
            <label>Please enter Your name</label> <br/><br/>
    <input  type="text" value={this.state.Name} required onChange={(e)=>this.setState({Name:e.target.value})}/> <br/><br/>
    <label>Please enter Your Email</label> <br/><br/>
    <input type="email" value={this.state.Gmail} required onChange={(e)=>this.setState({Gmail:e.target.value})}/><br/><br/>
    <label>Please enter Password</label> <br/><br/>
    <input  type="password" value={this.state.Password} required onChange={(e)=>this.setState({Password:e.target.value})}/> <br/><br/>
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
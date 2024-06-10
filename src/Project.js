import { Component } from "react";

import { Link } from "react-router-dom";

class Project extends Component{
    constructor(props){
        super(props)
            this.state={name: "simpleproject"}
        
        

    }

    render(){
        return(
            <>
            
<h1> this is {this.state.name}</h1>


<ul style={{"display":"flex", "justifyContent":"space-around" , "border":"2px solid red", "cursor":"pointer"}}>
    <li>
        
        <Link to='/signin' className="nav-link active">Singin page</Link>
    </li>
    <li>
    <Link to='/form' className="nav-link active">Form</Link>
    </li>
    <li>
        Form page
    </li>
</ul>




{/* <Form/> */}


            </>


        )
    }
}

export default Project
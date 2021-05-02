import React from "react"
import "../style.css"
function Product(props){
    return(
        <div className="cc">
        
            {/* using ternary operators to tell it to display
            no name in the absence of any  */}
            <h2 style={{display: props.name ? "block" :"none"}}
            >{props.name}</h2>
           {/* here we are telling the code to render a blue reponse for 
           the comments without names */}
            <h3 style={{color: !props.name && "blue"}}>
                Price: ₦{props.Price}</h3>
                It falls under {props.Tag} category
            <p>The manufacturer is  {props.Brand}</p>
        </div>
    )
}

export default Product
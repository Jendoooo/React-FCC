import React from "react"
import "../style.css"
function Product(props){
    return(
        <div className="cc">
            {/* using ternary operators to tell it to display
            no name in the absence of any  */}
            <h2 style={{display: props.name ? "block" :"none"}}
            >name: {props.name}</h2>
           {/* here we are telling the code to render a blue reponse for 
           the comments without names */}
            <h3 style={{color: !props.name && "blue"}}>
                price: Naira  {props.price}</h3>
        </div>
    )
}

export default Product
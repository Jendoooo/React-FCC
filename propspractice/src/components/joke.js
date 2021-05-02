import React from "react"
import "../style.css"
function Joke(props){
    return(
        <div className="cc">
            {/* using ternary operators to tell it to display
            no question in the absence of any  */}
            <h2 style={{display: props.question ? "block" :"none"}}
            >question: {props.question}</h2>
           {/* here we are telling the code to render a blue reponse for 
           the comments without questions */}
            <h3 style={{color: !props.question && "blue"}}>
                response: {props.punchline}</h3>
        </div>
    )
}

export default Joke 



// import React from 'react'

// function ContactCard (props){
//     return (
//         <div className="contact-card">
//             <img alt="we no know" src={props.contact.imgURL}></img>
//             <p>Phone : {props.contact.phone}</p>
//             <p>Email {props.contact.email}</p>
//         </div>
//     )
// }

// export default ContactCard
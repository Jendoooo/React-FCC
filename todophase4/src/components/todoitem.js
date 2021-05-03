import React from 'react'

const TODO = (props) => {
    return (
        <div className="todo-items">
            <input type="checkbox" 
            checked={props.item.completed} // should only check if this returns true 
            onChange={()=> props.handleChange(props.item.id)}/>
               <p>{props.item.text}</p>
               
        </div>
    )
}

export default TODO




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
